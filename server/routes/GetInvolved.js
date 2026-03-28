// server/routes/GetInvolved.js
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const GetInvolved = require("../models/GetInvolved");

const router = express.Router();

// ☁️ Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 🖼 Multer storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "futurevitals_getinvolved",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});
const upload = multer({ storage });

// 📥 GET current data
router.get("/", async (req, res) => {
  try {
    let page = await GetInvolved.findOne();
    if (!page) {
      page = await GetInvolved.create({});
    }
    res.json(page);
  } catch (err) {
    console.error("❌ GET /getinvolved error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// 💾 UPDATE data
router.put("/", async (req, res) => {
  try {
    let page = await GetInvolved.findOne();
    if (!page) {
      page = await GetInvolved.create(req.body);
    } else {
      await GetInvolved.updateOne({ _id: page._id }, req.body);
    }
    res.json({ success: true });
  } catch (err) {
    console.error("❌ PUT /getinvolved error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// 🖼 Image upload route
router.post("/upload", upload.single("image"), (req, res) => {
  try {
    res.json({ url: req.file.path });
  } catch (err) {
    console.error("Image upload failed:", err);
    res.status(500).json({ error: "Image upload failed" });
  }
});

module.exports = router;
