const Menu = require('./../models/menuModel');
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
exports.uploadMenuImages =
  upload.array('images', 5);

exports.resizeMenuImages = async (
  req,
  res,
  next
) => {
if (
  !req.files ||
  req.files.length === 0
)
  return next();

  req.body.images = [];

  await Promise.all(
    req.files.map(async (file, i) => {
      const filename = `menu-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(800, 800)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(
          `public/uploads/menus/${filename}`
        );

      req.body.images.push(filename);
    })
  );

  next();
};


exports.createMenu = factory.createOne(Menu);
exports.getAllMenu = factory.getAll(Menu, { path: 'category' });
exports.getMenu = factory.getOne(Menu);
exports.updateMenu = factory.updateOne(Menu);
exports.deleteMenu =factory.deleteOne(Menu);