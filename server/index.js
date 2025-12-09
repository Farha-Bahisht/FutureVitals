require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();

// =======================
// 🌐 Middleware
// =======================
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());
app.use(morgan('dev'));

// 📁 Serve uploaded images (so you can load them on the frontend)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// =======================
// 🧠 Routes
// =======================

// Admin Routes
const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);

// About Us Routes
const aboutRoutes = require('./routes/aboutus');
app.use('/api/aboutus', aboutRoutes);

// Newsletter Routes
const newsletterRoutes = require('./routes/newsletter');
app.use('/api/newsletter', newsletterRoutes);

// Blog Routes
const blogRoutes = require('./routes/blog');
app.use('/api/blogs', blogRoutes);

// Get Involved Routes
const getInvolvedRoutes = require("./routes/getinvolved");
app.use("/api/getinvolved", getInvolvedRoutes);


// =======================
// 🧪 Health Check
// =======================
app.get('/health', (req, res) => {
  res.json({ ok: true, message: 'API up' });
});

// =======================
// 🛢️ Connect to MongoDB
// =======================
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('❌ DB connection error:', err.message);
    process.exit(1);
  });
