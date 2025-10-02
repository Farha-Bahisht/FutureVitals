const express = require("express");
const router = express.Router();
const About = require("../models/Aboutus");

// GET /api/aboutus
router.get("/", async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = new About(); // create empty structure if not found
      await about.save();
    }
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/aboutus
router.put("/", async (req, res) => {
  try {
    const update = req.body; // will have mission, programs, team
    let about = await About.findOne();
    if (!about) {
      about = new About(update);
    } else {
      Object.assign(about, update);
    }
    await about.save();
    res.json({ success: true, about });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


const upload = require("../middleware/upload");

router.post("/upload", upload.single("image"), (req, res) => {
  try {
    // multer + cloudinary automatically attaches the URL at req.file.path
    res.json({ success: true, url: req.file.path });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
