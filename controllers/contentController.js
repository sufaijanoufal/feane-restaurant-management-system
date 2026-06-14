const Content = require('./../models/contentModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');
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
exports.uploadContentImage =
    upload.single('image');

exports.resizeContentImage = catchAsync(
  async (req, res, next) => {

    if (!req.file) return next();

    req.file.filename = `content-${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
      .resize(1200, 800)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(
        `public/uploads/content/${req.file.filename}`
      );

    req.body.image = req.file.filename;

    next();
  }
);

exports.createContent = factory.createOne(Content);
exports.getAllContent = factory.getAll(Content);
exports.getContent = factory.getOne(Content);
exports.updateContent = factory.updateOne(Content);
exports.deleteContent =factory.deleteOne(Content);
exports.getContentByType =
  catchAsync(async (req, res, next) => {

    const content =
      await Content.findOne({
        type: req.params.type
      });

    if (!content) {
      return next(
        new AppError(
          'No content found',
          404
        )
      );
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: content
      }
    });
  });