const Order = require('./../models/orderModel');
const Menu = require('./../models/menuModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');


exports.createOrder = async (req, res) => {
  const { items } = req.body;

  let totalPrice = 0;

  const orderItems = [];

  for (const item of items) {
    const menuItem = await Menu.findById(item.menu);

    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    orderItems.push({
      name: menuItem.name,
      price: menuItem.price,
      quantity: item.quantity,
      menu: menuItem._id
    });

    totalPrice += menuItem.price * item.quantity;
  }

  const order = await Order.create({
    user: req.user._id,
    items: orderItems,
    totalPrice
  });

  res.status(201).json({
    status: 'success',
    data: order
  });
};
exports.getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });

  res.json({
    results: orders.length,
    data: orders
  });
};
//for admin
exports.getAllOrders = factory.getAll(Order, { path: 'user' },{ path: 'items.name' });
exports.updateOrderStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json({ data: order });
};
