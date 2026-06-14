import * as model
  from './bookingModel.js';

import {
  renderBookingPage,
  renderBooking
} from './bookingView.js';

export const initBooking =
  async () => {

    renderBookingPage();

    await loadBooking();

    initStatusUpdate();
  };

const loadBooking =
  async () => {

    const booking =
      await model.getBooking();

    renderBooking(booking);
  };

const initStatusUpdate =
  () => {

    document.addEventListener(
      'change',

      async e => {

        if (
          e.target.classList.contains(
            'booking-status-select'
          )
        ) {

          await model.updateBooking(

            e.target.dataset.id,

            {
              status:
                e.target.value
            }
          );
        }
      }
    );
  };