const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  subject: String,
  message: { type: String, required: true },
  preferredContact: String,
  bestTime: String,
  hearAbout: String,
  newsletter: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
