const express = require('express');
const orderController = require('./../controllers/orderController');
const authController = require('./../controllers/authController');
const router = express.Router();

router
.route('/')
.post(authController.protect,orderController.createOrder)
.get(authController.protect,authController.restrictTo('admin'),orderController.getAllOrders);

router.get('/my',authController.protect, orderController.getMyOrders);

router
.route('/:id')
.patch(authController.protect,authController.restrictTo('admin'),orderController.updateOrderStatus)






module.exports = router;