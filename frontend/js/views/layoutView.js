

import { footer }
  from '../templates/footer.js';

export const renderLayout =
  () => {

    document.getElementById(
      'app'
    ).innerHTML = `



<div id="pageContent">
</div>

${footer}
`;
  };