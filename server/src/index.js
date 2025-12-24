import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { portfolioData } from './data/portfolio.js';
import Contact from './models/Contact.js';
import adminRoutes from './routes/admin.js';
import { logError } from './utils/errorLogger.js';

let isConnected = false;


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// const connectDB = async () => {
//   const mongoURI = process.env.MONGODB_URI;
//   if (mongoURI) {
//     try {
//       await mongoose.connect(mongoURI);
//       console.log('Connected to MongoDB');
//     } catch (error) {
//       console.log('MongoDB connection error:', error.message);
//       console.log('Running without database - contact form will not persist');
//     }
//   } else {
//     console.log('No MONGODB_URI found - running without database');
//   }
// };

const connectDB = async () => {
  if (isConnected) return;

  const mongoURI = process.env.MONGODB_URI;
  if (!mongoURI) {
    console.log('No MONGODB_URI found - running without database');
    return;
  }

  try {
    await mongoose.connect(mongoURI);
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('MongoDB connection error:', error.message);
    console.log('Running without database - contact form will not persist');
  }
};


connectDB();

app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.get('/api/projects', (req, res) => {
  res.json(portfolioData.projects);
});

app.get('/api/skills', (req, res) => {
  res.json(portfolioData.skills);
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      await logError('warning', 'Contact form validation failed', null, req.url);
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (mongoose.connection.readyState === 1) {
      const contact = new Contact({ name, email, message });
      await contact.save();
      await logError('info', `New contact message from ${email}`, null, req.url);
      res.json({ success: true, message: 'Message sent successfully!' });
    } else {
      console.log('Contact form submission:', { name, email, message });
      await logError('info', `Contact form submission (no DB): ${email}`, null, req.url);
      res.json({ success: true, message: 'Message received!' });
    }
  } catch (error) {
    await logError('error', 'Contact form error', error.stack, req.url);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', mongodb: mongoose.connection.readyState === 1 });
});

// Admin routes
app.use('/api/admin', adminRoutes);

// Global error handler
app.use((err, req, res, next) => {
  logError('error', err.message, err.stack, req.url);
  res.status(500).json({ error: 'Internal server error' });
});

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server running on port ${PORT}`);
//   logError('info', 'Server started successfully', null, null);
// });

export default app;
