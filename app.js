const express = require('express');
const app = express();
const path = require('path');

// middleware

app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const qs = require('qs'); 
app.set('query parser', str => qs.parse(str));



app.use('/admin', express.static(path.join(__dirname, 'admin')));
app.use(express.static('public'));

app.use(express.static('frontend'));


app.get('/', (req, res) => {

  res.sendFile(
    path.join(
      __dirname,
      'frontend',
      'index.html'
    )
  );
});
app.get('/admin', (req, res) => {

  res.sendFile(
    path.join(
      __dirname,
      'admin',
      'index.html'
    )
  );
});
app.use(
  '/uploads',
  express.static('public/uploads')
);
const cors = require('cors');
app.use(cors());
const userRouter = require('./routes/userRoutes');
app.use('/api/v1/users', userRouter);
const categoryRouter = require('./routes/categoryRoutes');
app.use('/api/v1/category', categoryRouter);
const menuRouter = require('./routes/menuRoutes');
app.use('/api/v1/menu', menuRouter);
const orderRouter = require('./routes/orderRoutes');
app.use('/api/v1/order', orderRouter);
const contentRouter = require('./routes/contentRoutes');
app.use('/api/v1/content', contentRouter);
const testimonialRouter = require('./routes/testimonialRoutes');
app.use('/api/v1/testimonial', testimonialRouter);
const bookingRouter = require('./routes/bookingRoutes');
app.use('/api/v1/booking', bookingRouter);
const offerRouter = require('./routes/offerRoutes');
app.use('/api/v1/offers', offerRouter);







// test route
app.get('/', (req, res) => {
  res.send('App is running...');
});
//last middleware
const globalErrorHandler = require('./controllers/errorController');
app.use(globalErrorHandler);

module.exports = app;
