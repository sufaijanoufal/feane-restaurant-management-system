export const initCarousel =
  () => {

    // testimonial carousel

    $('.client_owl-carousel')
      .owlCarousel({

        loop: true,

        margin: 20,

        nav: true,

        dots: false,

        autoplay: true,

        autoplayHoverPause: true,

        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ],

        responsive: {

          0: {
            items: 1
          },

          768: {
            items: 2
          }

        }

      });

  };
  export const initMenuFilter = () => {

  const $grid = $('.grid');

  $grid.isotope('destroy');

  $grid.isotope({
    itemSelector: '.all',
    layoutMode: 'fitRows'
  });

  $('.filters_menu li').off('click');

  $('.filters_menu li').on(
    'click',
    function () {

      $('.filters_menu li')
        .removeClass('active');

      $(this).addClass('active');

      const filterValue =
        $(this).attr('data-filter');

      $grid.isotope({
        filter: filterValue
      });
    }
  );
};