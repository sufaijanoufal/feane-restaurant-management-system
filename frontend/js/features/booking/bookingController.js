import * as model from './bookingModel.js';

export const initBooking = () => {

  const form =
    document.getElementById('bookingForm');

  if (!form) return;

  form.addEventListener(
    'submit',
    async e => {

      e.preventDefault();

      try {

        const bookingData = {

          name:
            document.getElementById('name').value,

          phone:
            document.getElementById('phone').value,

          email:
            document.getElementById('email').value,

          persons:
            document.getElementById('persons').value,

          date:
            document.getElementById('date').value
        };

        console.log(bookingData);

        await model.createBooking(
          bookingData
        );

        alert('Booking successful');

        form.reset();

      } catch (err) {

        console.log(err);

        alert(
          err.response?.data?.message ||
          'Something went wrong'
        );
      }
    }
  );
};