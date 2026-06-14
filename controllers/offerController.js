const Offer = require('./../models/offerModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');
const multer = require('multer');
const sharp = require('sharp');
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(
      new AppError('Not an image! Please upload only images.', 400),
      false
    );
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadOfferImage =
  upload.single('image');


exports.resizeOfferImage =
  catchAsync(
    async (
      req,
      res,
      next
    ) => {

      if (!req.file)
        return next();

      req.file.filename =
        `offer-${Date.now()}.jpeg`;

      await sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(
          `public/uploads/offer/${req.file.filename}`
        );

      req.body.image =
        req.file.filename;

      next();
    }
  );

exports.createOffer = factory.createOne(Offer);
exports.getAllOffer =factory.getAll(Offer);
exports.updateOffer = factory.updateOne(Offer);
exports.deleteOffer = factory.deleteOne(Offer);