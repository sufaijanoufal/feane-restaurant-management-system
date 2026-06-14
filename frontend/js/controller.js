import {
  renderLayout
} from './views/layoutView.js';

import {
  initHome
} from './features/home/homeController.js';
import {
  initAbout
} from './features/about/aboutController.js';

import { initBooking }
from './features/booking/bookingController.js';

import { initMenu }
from './features/menu/menuController.js';

const init = () => {

  renderLayout();

  const page =
    new URLSearchParams(
      window.location.search
    ).get('page');

  switch (page) {

    case 'about':
      initAbout();
      break;

    case 'menu':
      initMenu();
      break;
       case 'booking':
      initBooking();
      break;

    case 'home':
    default:
      initHome();
  }
};

init();