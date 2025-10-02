// server/routes/admin.js
const express = require("express");
const router = express.Router();
require("dotenv").config();

// POST /api/admin/login
router.post("/login", (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Username and password required" });
  }

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.json({ success: true, message: "Login successful" });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

module.exports = router;
