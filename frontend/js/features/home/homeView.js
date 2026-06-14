import { heroSection }
  from '../../sections/heroSection.js';

import { offerSection }
  from '../../sections/offerSection.js';

  import { menuSection }
  from '../../sections/menuSection.js';

import { aboutSection }
  from '../../sections/aboutSection.js';

  import { bookSection }
  from '../../sections/bookSection.js';

import { testimonialSection }
  from '../../sections/testimonialSection.js';


export const renderHomePage =
  () => {

    document.getElementById(
      'pageContent'
    ).innerHTML = `

${heroSection}

${offerSection}

${menuSection}

${aboutSection}

${bookSection}

${testimonialSection}
`;
  };

  export const renderMenus = menus => {

  const container =
    document.getElementById('menuContainer');

  container.innerHTML = menus
    .map(menu => {

      const categoryClass = menu.category.name
        .toLowerCase()
        .replace(/\s+/g, '-');

      return `

<div class="col-sm-6 col-lg-4 all ${categoryClass}">

  <div class="box">

    <div class="img-box">

      <img
        src="http://localhost:3000/uploads/menus/${menu.images[0]}"
      />

    </div>

    <div class="detail-box">

      <h5>
        ${menu.name}
      </h5>

      <p>
        ${menu.description || ''}
      </p>

      <div class="options">

        <h6>
          SAR ${menu.price}
        </h6>

      </div>

    </div>

  </div>

</div>

`;
    })
    .join('');
};

export const renderCategories = categories => {
 
  const categoryContainer =
    document.querySelector('#categoryContainer');

  const html = `
    <li class="active" data-filter="*">All</li>

    ${categories.map(category => `
      <li data-filter=".${category.name
  .toLowerCase()
  .replace(/\s+/g, '-')}">
        ${category.name}
      </li>
    `).join('')}
  `;

  categoryContainer.innerHTML = html;
};

export const renderTestimonial = testimonials => {

  const testimonialContainer =
    document.querySelector(
      '#testimonialContainer'
    );

  if (!testimonialContainer) return;

  testimonialContainer.innerHTML =
    testimonials
      .map(
        testimonial => `

<div class="item">

  <div class="box">

    <div class="detail-box">

      <p>
        ${testimonial.review}
      </p>

      <h6>
        ${testimonial.name}
      </h6>

      <p>
        ${testimonial.role || ''}
      </p>

    </div>

    <div class="img-box">

      <img
        src="http://localhost:3000/uploads/testimonial/${testimonial.image}"
        alt=""
        class="box-img"
      >

    </div>

  </div>

</div>
`
      )
      .join('');

  $('.client_owl-carousel')
    .owlCarousel('destroy');

  $('.client_owl-carousel')
    .owlCarousel({
      loop: true,
      margin: 0,
      dots: false,
      nav: true,
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
        },
        1000: {
          items: 2
        }
      }
    });
};
export const renderAbout = about => {

  const container =
    document.getElementById(
      'aboutContainer'
    );

  if (!about) return;

  container.innerHTML = `

<div class="row">

  <div class="col-md-6">
    <div class="img-box">

      <img
        src="http://localhost:3000/uploads/content/${about.image}"
        alt=""
      >

    </div>
  </div>

  <div class="col-md-6">

    <div class="detail-box">

      <div class="heading_container">
        <h2>
          ${about.title}
        </h2>
      </div>

      <p>
        ${about.description}
      </p>

      <a href="">
        Read More
      </a>

    </div>

  </div>

</div>

`;
};
export const renderFooter = footer => {

  const container =
    document.getElementById(
      'footerContainer'
    );

  if (!footer) return;

  container.innerHTML = `

  <a href="" class="footer-logo">
              ${footer.title}
            </a>
            <p>
              ${footer.description}
            </p>
            <div class="footer_social">
              <a href="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-pinterest" aria-hidden="true"></i>
              </a>
            </div>

`;
};
export const renderOffers = offers => {

  const container =
    document.getElementById('offerContainer');

  if (!container) return;

  container.innerHTML = offers
    .filter(offer => offer.isActive)
    .map(
      offer => `
      
<div class="col-md-6">

  <div class="box">

    <div class="img-box">

      <img
        src="http://localhost:3000/uploads/offer/${offer.image}"
        alt="${offer.title}"
      >

    </div>

    <div class="detail-box">

      <h5>
        ${offer.title}
      </h5>

      <h6>
        <span>${offer.discountText}</span>
      </h6>

      <a href="${offer.buttonLink || '#'}">

        ${offer.buttonText || 'Order Now'}

        <svg version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 456.029 456.029">

          <g>
            <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"/>
          </g>

        </svg>

      </a>

    </div>

  </div>

</div>

`
    )
    .join('');
};