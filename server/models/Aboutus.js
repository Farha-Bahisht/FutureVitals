// server/models/About.js
const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  //  WHO WE ARE SECTION
  whoWeAre: {
    title: { type: String, default: "Who We Are" },
    text: { type: String, default: "" },
    image: { type: String, default: "" } // illustration or main section image
  },

  //  MISSION SECTION
  mission: {
    title: { type: String, default: "Our Mission" },
    text: { type: String, default: "" }
  },

  // VISION SECTION
  vision: {
    title: { type: String, default: "Our Vision" },
    text: { type: String, default: "" }
  },

  // PROGRAMS SECTION
  programs: [
    {
      title: { type: String, default: "" },
      text: { type: String, default: "" },
      image: { type: String, default: "" }
    }
  ],

  
});

// Export the model
module.exports = mongoose.model("About", aboutSchema);
