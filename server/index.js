require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// middleware
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());
app.use(morgan('dev'));

// newsletter route
const newsletterRoutes = require('./routes/newsletter');
app.use('/api/newsletter', newsletterRoutes);

// blog route
const blogRoutes = require('./routes/blog');
app.use('/api/blogs', blogRoutes);

// test route
app.get('/health', (req, res) => {
  res.json({ ok: true, message: 'API up' });
});

// env variables
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

// connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log(' MongoDB connected');
    app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error(' DB connection error:', err.message);
    process.exit(1);
  });
