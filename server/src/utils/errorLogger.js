import ErrorLog from '../models/ErrorLog.js';
import mongoose from 'mongoose';

const errorLogs = [];

export const logError = async (level, message, stack = null, url = null) => {
  const logEntry = {
    level,
    message,
    stack,
    url,
    timestamp: new Date(),
  };

  // Store in memory
  errorLogs.push(logEntry);
  
  // Keep only last 1000 logs in memory
  if (errorLogs.length > 1000) {
    errorLogs.shift();
  }

  // Store in database if available
  if (mongoose.connection.readyState === 1) {
    try {
      await ErrorLog.create(logEntry);
    } catch (error) {
      console.error('Failed to save error log to database:', error);
    }
  }

  // Also log to console
  console.log(`[${level.toUpperCase()}] ${message}`, stack || '');
};

export const getErrorLogs = async (filter = 'all', limit = 100) => {
  let logs = [];

  if (mongoose.connection.readyState === 1) {
    try {
      const query = filter === 'all' ? {} : { level: filter };
      logs = await ErrorLog.find(query)
        .sort({ timestamp: -1 })
        .limit(limit)
        .lean();
    } catch (error) {
      console.error('Failed to fetch error logs from database:', error);
      // Fallback to in-memory logs
      logs = errorLogs
        .filter(log => filter === 'all' || log.level === filter)
        .slice(0, limit)
        .reverse();
    }
  } else {
    // Use in-memory logs
    logs = errorLogs
      .filter(log => filter === 'all' || log.level === filter)
      .slice(0, limit)
      .reverse();
  }

  return logs;
};

export const clearErrorLogs = async () => {
  errorLogs.length = 0;
  
  if (mongoose.connection.readyState === 1) {
    try {
      await ErrorLog.deleteMany({});
    } catch (error) {
      console.error('Failed to clear error logs from database:', error);
    }
  }
};

