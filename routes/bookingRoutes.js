const express = require('express');
const bookingController = require('./../controllers/bookingController');
const authController = require('./../controllers/authController');
const router = express.Router();

router
.route('/')
.post(bookingController.createBooking)
.get(authController.protect,authController.restrictTo('admin'),bookingController.getAllBookings);



router
.route('/:id')
.patch(bookingController.updateBooking)
.delete(bookingController.deleteBooking);






module.exports = router;