// server/models/About.js
const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  mission: {
    title: { type: String, default: "Our Mission" },
    text: { type: String, default: "" },
    image: { type: String, default: "" }  // store image URL
  },
  programs: [
    {
      title: String,
      text: String,
      image: String
    }
  ],
  team: [
    {
      name: String,
      role: String,
      quote: String,
      image: String
    }
  ]
});

module.exports = mongoose.model("About", aboutSchema);
