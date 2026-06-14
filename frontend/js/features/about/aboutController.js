import { getAbout }
from './aboutModel.js';

import {
  renderAboutPage,
  renderAboutContent
}
from './aboutView.js';

export const initAbout =
async () => {

  renderAboutPage();

  const about =
    await getAbout();

  renderAboutContent(
    about
  );
};