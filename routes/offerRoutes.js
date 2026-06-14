const express = require('express');
const offerController = require('./../controllers/offerController');
const authController = require('./../controllers/authController');
const router = express.Router();

router
.route('/')
.post(authController.protect,authController.restrictTo('admin'),offerController.uploadOfferImage,
    offerController.resizeOfferImage,offerController.createOffer)
.get(offerController.getAllOffer);

router
.route('/:id')
.patch(authController.protect,authController.restrictTo('admin'),offerController.uploadOfferImage,
    offerController.resizeOfferImage,offerController.updateOffer)
.delete(authController.protect,authController.restrictTo('admin'),offerController.deleteOffer)





module.exports = router;