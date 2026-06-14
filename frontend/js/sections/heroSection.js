import { navbar }
  from '../templates/navbar.js';

import { sliderSection }
  from './sliderSection.js';

export const heroSection = `

<div class="hero_area">

  <div class="bg-box">

    <img
      src="images/hero-bg.jpg"
      alt=""
    />

  </div>

  ${navbar}

  ${sliderSection}

</div>
`;