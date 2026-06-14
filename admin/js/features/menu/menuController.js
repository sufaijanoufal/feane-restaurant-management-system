import * as model
  from './menuModel.js';

import {
  renderMenuPage,
  renderMenus,
  renderCategories,
  previewImages,
  renderPagination
} from './menuView.js';

let editId = null;
let currentPage = 1;
let currentSearch = '';
export const initMenus =
  async () => {

    renderMenuPage();

    await loadMenus();

    await loadCategories();

    initCreate();
initEdit();
    initDelete();
    initAddButton();

    initImagePreview();
    initGallery();
    initSearch();

initPagination();
  };
const loadMenus =
  async () => {

    const res =
      await model.getMenus(
        currentPage,
        currentSearch
      );
console.log(res);
    renderMenus(
      res.data.data
    );

   renderPagination(
  res.total
);
  };

const loadCategories =
  async () => {

    const categories =
      await model.getCategories();

    renderCategories(
      categories
    );
  };

const initImagePreview =
  () => {

    document
      .getElementById(
        'menuImages'
      )
      .addEventListener(
        'change',
        e => {

          console.log(
            e.target.files
          );

          console.log(
            e.target.files.length
          );

          previewImages(
            e.target.files
          );
        }
      );
  };

const initCreate =
  () => {

    document
      .getElementById(
        'menuForm'
      )
      .addEventListener(
        'submit',
        async e => {

          e.preventDefault();

          const formData =
            new FormData();

          formData.append(
            'name',
            document.getElementById(
              'menuName'
            ).value
          );

          formData.append(
            'price',
            document.getElementById(
              'menuPrice'
            ).value
          );

          formData.append(
            'category',
            document.getElementById(
              'menuCategory'
            ).value
          );

          formData.append(
            'description',
            document.getElementById(
              'menuDescription'
            ).value
          );

          formData.append(
            'isAvailable',
            document.getElementById(
              'menuAvailable'
            ).checked
          );

          const files =
            document.getElementById(
              'menuImages'
            ).files;

          Array.from(files)
            .forEach(file => {

              formData.append(
                'images',
                file
              );
            });

          if (editId) {

  await model.updateMenu(
    editId,
    formData
  );

} else {

  await model.createMenu(
    formData
  );
}
editId = null;

          $('#menuModal').modal(
            'hide'
          );

          document
            .getElementById(
              'menuForm'
            )
            .reset();

          await loadMenus();
        }
      );
  };
  const initEdit = () => {

  document.addEventListener(
    'click',
    e => {

      if (
        e.target.classList.contains(
          'menu-edit-btn'
        )
      ) {

        editId =
          e.target.dataset.id;

        document.getElementById(
          'menuName'
        ).value =
          e.target.dataset.name;

        document.getElementById(
          'menuPrice'
        ).value =
          e.target.dataset.price;

        document.getElementById(
          'menuDescription'
        ).value =
          e.target.dataset.description;

        document.getElementById(
          'menuCategory'
        ).value =
          e.target.dataset.category;

        document.getElementById(
          'menuAvailable'
        ).checked =
          e.target.dataset.available
            === 'true';

        document.getElementById(
          'menuModalTitle'
        ).textContent =
          'Edit Menu';

        $('#menuModal').modal(
          'show'
        );
      }
    }
  );
};

const initDelete =
  () => {

    document.addEventListener(
      'click',
      async e => {

        if (
          e.target.classList.contains(
            'menu-delete-btn'
          )
        ) {

          const id =
            e.target.dataset.id;

          if (
            !confirm(
              'Delete menu?'
            )
          )
            return;

          await model.deleteMenu(
            id
          );

          await loadMenus();
        }
      }
    );
  };
  const initAddButton = () => {

  document
    .getElementById(
      'addMenuBtn'
    )
    .addEventListener(
      'click',
      () => {

        editId = null;

        document
          .getElementById(
            'menuForm'
          )
          .reset();

        document
          .getElementById(
            'imagePreview'
          ).innerHTML = '';

        document
          .getElementById(
            'menuModalTitle'
          ).textContent =
            'Add Menu';
      }
    );
};
const initGallery =
  () => {

    document.addEventListener(
      'click',
      e => {

        if (
          e.target.classList.contains(
            'view-gallery-btn'
          )
        ) {

          const images =
            JSON.parse(
              e.target.dataset.images
            );

          document.getElementById(
            'galleryContainer'
          ).innerHTML =
            images
              .map(
                img => `

<img
  src="/uploads/menus/${img}"

  width="180"

  height="180"

  style="
    object-fit: cover;
    border-radius: 10px;
  "
/>
`
              )
              .join('');

          $('#galleryModal').modal(
            'show'
          );
        }
      }
    );
  };
  const initSearch =
  () => {

    document
      .getElementById(
        'menuSearch'
      )

      .addEventListener(
        'input',

        async e => {

          currentSearch =
            e.target.value;

          currentPage = 1;

          await loadMenus();
        }
      );
  };
  const initPagination =
  () => {

    document.addEventListener(
      'click',

      async e => {

        if (
          e.target.classList.contains(
            'pagination-btn'
          )
        ) {

          currentPage =
            +e.target.dataset.page;

          await loadMenus();
        }
      }
    );
  };