import express from 'express';
import { authenticateToken, generateToken } from '../middleware/auth.js';
import { portfolioData } from '../data/portfolio.js';
import { logError, getErrorLogs, clearErrorLogs } from '../utils/errorLogger.js';
import Contact from '../models/Contact.js';
import mongoose from 'mongoose';

const router = express.Router();

// Admin credentials (in production, use environment variables)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = generateToken(username);
      res.json({
        success: true,
        token,
        message: 'Login successful',
      });
    } else {
      await logError('warning', 'Failed admin login attempt', null, req.url);
      res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }
  } catch (error) {
    await logError('error', 'Admin login error', error.stack, req.url);
    res.status(500).json({
      success: false,
      message: 'Login failed',
    });
  }
});

// Get statistics
router.get('/stats', authenticateToken, async (req, res) => {
  try {
    let contactsCount = 0;
    if (mongoose.connection.readyState === 1) {
      contactsCount = await Contact.countDocuments();
    }

    const stats = {
      projectsCount: portfolioData.projects?.length || 0,
      skillsCount: portfolioData.skills?.length || 0,
      contactsCount,
      errorsCount: 0, // Will be calculated from error logs
    };

    const errorLogs = await getErrorLogs('error', 100);
    const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);
    stats.errorsCount = errorLogs.filter(
      log => new Date(log.timestamp) > last24Hours
    ).length;

    res.json(stats);
  } catch (error) {
    await logError('error', 'Failed to fetch stats', error.stack, req.url);
    res.status(500).json({ success: false, message: 'Failed to fetch statistics' });
  }
});

// Update portfolio sections
router.put('/portfolio/:section', authenticateToken, async (req, res) => {
  try {
    const { section } = req.params;
    const data = req.body;

    // Update the portfolio data
    if (section === 'hero') {
      portfolioData.hero = { ...portfolioData.hero, ...data };
    } else if (section === 'about') {
      portfolioData.about = { ...portfolioData.about, ...data };
    } else if (section === 'skills') {
      portfolioData.skills = data;
    } else if (section === 'projects') {
      portfolioData.projects = data;
    } else if (section === 'contact') {
      portfolioData.contact = { ...portfolioData.contact, ...data };
    } else if (section === 'resume') {
      portfolioData.resume = { ...portfolioData.resume, ...data };
    } else {
      return res.status(400).json({ success: false, message: 'Invalid section' });
    }

    // In production, you would save this to a database
    // For now, we'll keep it in memory and optionally save to a file

    await logError('info', `Portfolio section '${section}' updated`, null, req.url);

    res.json({
      success: true,
      message: `${section} updated successfully`,
      portfolio: portfolioData,
    });
  } catch (error) {
    await logError('error', 'Failed to update portfolio', error.stack, req.url);
    res.status(500).json({ success: false, message: 'Failed to update portfolio' });
  }
});

// Get error logs
router.get('/errors', authenticateToken, async (req, res) => {
  try {
    const filter = req.query.filter || 'all';
    const logs = await getErrorLogs(filter, 100);
    res.json(logs);
  } catch (error) {
    await logError('error', 'Failed to fetch error logs', error.stack, req.url);
    res.status(500).json({ success: false, message: 'Failed to fetch error logs' });
  }
});

// Clear error logs
router.delete('/errors', authenticateToken, async (req, res) => {
  try {
    await clearErrorLogs();
    res.json({ success: true, message: 'Error logs cleared' });
  } catch (error) {
    await logError('error', 'Failed to clear error logs', error.stack, req.url);
    res.status(500).json({ success: false, message: 'Failed to clear error logs' });
  }
});

export default router;

