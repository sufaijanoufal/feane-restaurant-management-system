const express = require('express');
const contentController = require('./../controllers/contentController');
const authController = require('./../controllers/authController');
const router = express.Router();

router
.route('/')
.post(authController.protect,authController.restrictTo('admin'),contentController.uploadContentImage,
    contentController.resizeContentImage,contentController.createContent)
.get(contentController.getAllContent);
router
  .route('/type/:type')
  .get(contentController.getContentByType);
router
.route('/:id')
.get(contentController.getContent)
.patch(authController.protect,authController.restrictTo('admin'),contentController.uploadContentImage,
    contentController.resizeContentImage,contentController.updateContent)
.delete(authController.protect,authController.restrictTo('admin'),contentController.deleteContent)





module.exports = router;