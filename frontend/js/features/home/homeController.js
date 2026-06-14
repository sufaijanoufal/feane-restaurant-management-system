import {
  renderHomePage,
  renderMenus,
  renderCategories,
  renderTestimonial,
  renderFooter,
  renderAbout,
  renderOffers
} from './homeView.js';

import {
  getMenus,
  getCategories,
  getTestimonial,
  getFooter,
  getAbout,
  getOffer
} from './homeModel.js';

import {
  initCarousel,
  initMenuFilter
} from '../../utils/initPlugins.js';
import {
  initBooking
} from '../booking/bookingController.js';


export const initHome =
  async () => {

    // render static sections

    renderHomePage();

    // load API data
       const menus = await getMenus();
       const categories = await getCategories();
       const testimonials = await getTestimonial();
        const about = await getAbout();
       const footer = await getFooter();
        const offers = await getOffer();
       
   // render dynamic sections

       renderMenus(menus);
      

const $grid = $('.grid');

$grid.isotope('destroy');

$grid.isotope({
  itemSelector: '.all',
  layoutMode: 'fitRows'
});

$grid.isotope('reloadItems');
$grid.isotope('layout');
       renderCategories(categories);
       renderTestimonial(testimonials);
       renderAbout(about);
       renderFooter(footer);
       renderOffers(offers);
  // initialize plugins AFTER rendering

     initBooking();
      initCarousel();
      initMenuFilter();
       
  };