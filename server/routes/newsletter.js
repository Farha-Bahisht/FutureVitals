const express = require('express');
const Subscriber = require('../models/Subscriber');
const router = express.Router();

// POST /api/newsletter → add new email
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const newSub = new Subscriber({ email });
    await newSub.save();

    res.status(201).json({ message: 'Subscribed successfully!' });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/newsletter → list all emails (admin use)
router.get('/', async (req, res) => {
  try {
    const subs = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/newsletter/unsubscribe → remove email
router.post('/unsubscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const deleted = await Subscriber.findOneAndDelete({ email });
    if (!deleted) {
      return res.status(404).json({ error: 'Email not found' });
    }

    res.json({ message: 'Unsubscribed successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
