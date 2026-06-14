const express = require('express');
const categoryController = require('./../controllers/categoryController');
const authController = require('./../controllers/authController');
const router = express.Router();

router
.route('/')
.post(authController.protect, 
   categoryController.createCategory)
.get(categoryController.getAllCategories);

router
.route('/:id')
.patch(authController.protect,
    authController.restrictTo('admin'), 
  categoryController.updateCategory)
.delete(authController.protect,authController.restrictTo('admin'),categoryController.deleteCategory)





module.exports = router;