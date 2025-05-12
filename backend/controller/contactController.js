const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {

  try {
    // console.log('Incoming request body:', req.body);

    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message submitted successfully!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
