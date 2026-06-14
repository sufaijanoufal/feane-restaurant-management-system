import {
  protectPage,
  initLogout,
  renderLoggedInUser
} from './features/auth/authController.js';

import {
  renderLayout
} from './views/layoutView.js';

import {
  initProfile
} from './features/profile/profileController.js';
import {
  initCategories
} from './features/categories/categoryController.js';

import {
  initMenus
} from './features/menu/menuController.js';
import {
  initOrders
} from './features/orders/orderController.js';
import {
  initContent
} from './features/content/contentController.js';
import {
  initTestimonial
} from './features/testimonial/testimonialController.js';

import {
  initBooking
} from './features/booking/bookingController.js';
import {
  initOffer
} from './features/offers/offerController.js';


const init = async () => {

  // PROTECT PAGE
  await protectPage();

  // RENDER SIDEBAR/TOPBAR
  renderLayout();

  // USER INFO
  renderLoggedInUser();

  // LOGOUT
  initLogout();

  // GET CURRENT PAGE
  const page =
    new URLSearchParams(
      window.location.search
    ).get('page');

  // ROUTING
  if (page === 'profile') {

  await initProfile();

}
  else if (page === 'menus') {

    await initMenus();

  } else if (page === 'categories'){

    await initCategories();
  } else if (page === 'orders') {

  await initOrders();
}
else if (page === 'content') {

  await initContent();
}
else if (page === 'testimonial') {

  await initTestimonial();
}
else if (page === 'booking') {

  await initBooking();
}
else if (page === 'offers') {

  await initOffer();
}
};

init();