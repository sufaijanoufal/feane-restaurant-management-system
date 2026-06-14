const mongoose = require('mongoose');



const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

      role: String,

      review: {
        type: String,
        required: true
      },

    image: String,
     rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
      },
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
  mongoose.model('Testimonial', testimonialSchema);