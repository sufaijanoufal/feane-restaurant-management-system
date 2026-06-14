const express = require('express');
const testimonialController = require('./../controllers/testimonialController');
const authController = require('./../controllers/authController');
const router = express.Router();

router
.route('/')
.post(authController.protect,authController.restrictTo('admin'),testimonialController.uploadTestimonialImage,
    testimonialController.resizeTestimonialImage,testimonialController.createTestimonial)
.get(testimonialController.getAllTestimonial);

router
.route('/:id')
.patch(authController.protect,authController.restrictTo('admin'),testimonialController.uploadTestimonialImage,
    testimonialController.resizeTestimonialImage,testimonialController.updateTestimonial)
.delete(authController.protect,authController.restrictTo('admin'),testimonialController.deleteTestimonial)





module.exports = router;