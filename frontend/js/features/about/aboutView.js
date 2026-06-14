import { navbar }
  from '../../templates/navbar.js';
 import { aboutSection } from '../../sections/aboutSection.js';

export const renderAboutPage =
() => {
   document.body.classList.add('sub_page');
  document.getElementById(
    'pageContent'
  ).innerHTML = `


${navbar}
${aboutSection}

<section class="about_section">

  <div
    class="container"
    id="aboutPageContainer"
  >
  </div>

</section>

`;

};
export const renderAboutContent =
about => {

  const container =
    document.getElementById(
      'aboutPageContainer'
    );

  container.innerHTML = `

<div class="row">

  <div class="col-md-6">

    <img
      src="http://localhost:3000/uploads/content/${about.image}"
      class="img-fluid"
    >

  </div>

  <div class="col-md-6">

    <h2>
      ${about.title}
    </h2>

    <p>
      ${about.description}
    </p>

  </div>

</div>

`;

};