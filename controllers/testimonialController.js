const Testimonial = require('./../models/testimonialModel');
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

exports.uploadTestimonialImage =
  upload.single('image');


exports.resizeTestimonialImage =
  catchAsync(
    async (
      req,
      res,
      next
    ) => {

      if (!req.file)
        return next();

      req.file.filename =
        `testimonial-${Date.now()}.jpeg`;

      await sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(
          `public/uploads/testimonial/${req.file.filename}`
        );

      req.body.image =
        req.file.filename;

      next();
    }
  );

exports.createTestimonial = factory.createOne(Testimonial);
exports.getAllTestimonial =factory.getAll(Testimonial);
exports.updateTestimonial = factory.updateOne(Testimonial);
exports.deleteTestimonial = factory.deleteOne(Testimonial);