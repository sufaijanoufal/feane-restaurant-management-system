import sidebar from '../templates/sidebar.js';
import topbar from '../templates/topbar.js';
import footer from '../templates/footer.js';

export const renderLayout = () => {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div id="wrapper">

      ${sidebar()}

      <div id="content-wrapper" class="d-flex flex-column">

        <div id="content">

          ${topbar()}

          <div class="container-fluid" id="pageContent"></div>

        </div>

        ${footer()}

      </div>

    </div>
  `;
};