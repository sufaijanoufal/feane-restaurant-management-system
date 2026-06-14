import { navbar }
  from '../../templates/navbar.js';
  import { menuSection } from '../../sections/menuSection.js';


export const renderMenuPage =
() => {
 
 document.body.classList.add('sub_page');
  document.getElementById(
    'pageContent'
  ).innerHTML = `


${navbar}
 ${menuSection}

<section class="menu_section">

  <div
    class="container"
    id="menuContainer"
  >
  </div>

</section>

`;

};
export const renderMenuContent =
menus => {

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
export const renderCategoryContent =
categories => {
  const container =
    document.getElementById(
      'categoryContainer'
    );

  container.innerHTML = categories
    .map(
      category => `
        <li data-filter=".${category.name
          .toLowerCase()
          .replace(/\s+/g, '-')}">
          ${category.name}
        </li>
      `
    )
    .join('');
};