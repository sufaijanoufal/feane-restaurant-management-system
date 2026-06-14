import { getMenus,getCategories }
from './menuModel.js';

import {
  renderMenuPage,
  renderMenuContent,renderCategoryContent
}
from './menuView.js';
import {
  initMenuFilter
} from '../../utils/initPlugins.js';
export const initMenu =
async () => {

  renderMenuPage();

  const [menus, categories] =
    await Promise.all([
      getMenus(),
      getCategories()
    ]);

  renderCategoryContent(categories);
  renderMenuContent(menus);
  

const $grid = $('.grid');

$grid.isotope('destroy');

$grid.isotope({
  itemSelector: '.all',
  layoutMode: 'fitRows'
});

$grid.isotope('reloadItems');
$grid.isotope('layout');

initMenuFilter();

};