// server/models/GetInvolved.js
const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  title: String,
  text: String,
  image: String,
  buttonText: String,
  buttonLink: String,
});

const getInvolvedSchema = new mongoose.Schema({
  banner: {
    title: { type: String, default: "Get Involved" },
    subtitle: { type: String, default: "You Can Make a Difference" },
    image: { type: String, default: "" },
  },
  sections: [sectionSchema],
  formSection: {
    title: { type: String, default: "Want to get started right away?" },
    text: { type: String, default: "Fill out our quick form and join the movement." },
    buttonText: { type: String, default: "Open Form" },
    buttonLink: { type: String, default: "" },
  },
});

module.exports = mongoose.model("GetInvolved", getInvolvedSchema);
