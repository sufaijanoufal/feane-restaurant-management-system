const mongoose = require('mongoose');



const contentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      unique: true
    },

    title: String,

    subtitle: String,

    description: String,

    image: String,

    buttonText: String,

    buttonLink: String,


    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports =
  mongoose.model('Content', contentSchema);