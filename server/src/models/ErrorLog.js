import mongoose from 'mongoose';

const errorLogSchema = new mongoose.Schema({
  level: {
    type: String,
    enum: ['error', 'warning', 'info'],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
  },
  url: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

export default mongoose.models.ErrorLog || mongoose.model('ErrorLog', errorLogSchema);

