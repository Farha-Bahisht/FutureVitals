// server/routes/about.js
const express = require("express");
const router = express.Router();
const About = require("../models/Aboutus");

// GET /api/about → public, returns current about content
router.get("/", async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      return res.json({ content: "" });
    }
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/about → update content (for admin only)
// for now, no JWT — just allow if logged in frontend handles it
router.put("/", async (req, res) => {
  try {
    const { content } = req.body;
    let about = await About.findOne();
    if (!about) {
      about = new About({ content });
    } else {
      about.content = content;
    }
    await about.save();
    res.json({ success: true, about });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
