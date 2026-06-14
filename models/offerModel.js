const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    image: String,

    discountText: String,

    buttonText: {
      type: String,
      default: 'Order Now'
    },

    buttonLink: String,

    startDate: Date,

    endDate: Date,

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
  mongoose.model('Offer', offerSchema);