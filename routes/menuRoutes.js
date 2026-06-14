const express = require('express');
const menuController = require('./../controllers/menuController');
const authController = require('./../controllers/authController');
const router = express.Router();

router
.route('/')
.post(authController.protect,authController.restrictTo('admin'),menuController.uploadMenuImages,
    menuController.resizeMenuImages,menuController.createMenu)
.get(menuController.getAllMenu);

router
.route('/:id')
.get(menuController.getMenu)
.patch(authController.protect,authController.restrictTo('admin'),menuController.uploadMenuImages,
    menuController.resizeMenuImages,menuController.updateMenu)
.delete(authController.protect,authController.restrictTo('admin'),menuController.deleteMenu)





module.exports = router;