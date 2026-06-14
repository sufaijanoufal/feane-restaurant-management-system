import * as model from './categoryModel.js';

import {
  renderCategoryPage,
  renderCategories
} from './categoryView.js';

let editId = null;

export const initCategories = async () => {

  // RENDER PAGE FIRST
  renderCategoryPage();

  // LOAD DATA
  await loadCategories();

  // ATTACH EVENTS
  initCreateOrUpdate();

  initDelete();

  initEdit();

  initAddButton();
};

// LOAD CATEGORIES
const loadCategories = async () => {

  const categories =
    await model.getCategories();

  renderCategories(categories);
};

// CREATE / UPDATE
const initCreateOrUpdate = () => {

  const form =
    document.getElementById('categoryForm');

  if (!form) return;

  form.addEventListener(
    'submit',
    async e => {

      e.preventDefault();

      try {

       const categoryData = {
  name: document.getElementById(
    'categoryName'
  ).value
};
       

        if (editId) {

          await model.updateCategory(
  editId,
  categoryData
);

        } else {

          await model.createCategory(
  categoryData
);
        }

        form.reset();

        editId = null;

        

        $('#categoryModal').modal('hide');

        await loadCategories();

      } catch (err) {

  console.log(err.response.data);

  console.error(err);

  alert(
    err.response?.data?.message ||
    err.message
  );
}
    }
  );
};

// DELETE
const initDelete = () => {

  document.addEventListener(
    'click',
    async e => {

      if (
        e.target.classList.contains(
          'delete-btn'
        )
      ) {

        const id =
          e.target.dataset.id;

        if (
          !confirm(
            'Delete category?'
          )
        )
          return;

        await model.deleteCategory(id);

        await loadCategories();
      }
    }
  );
};

// EDIT
const initEdit = () => {

  document.addEventListener(
    'click',
    e => {

      if (
        e.target.classList.contains(
          'edit-btn'
        )
      ) {

        editId =
          e.target.dataset.id;

        document.getElementById(
          'categoryName'
        ).value =
          e.target.dataset.name;

        document.getElementById(
          'modalTitle'
        ).textContent =
          'Edit Category';

        $('#categoryModal').modal(
          'show'
        );
      }
    }
  );
};

// ADD BUTTON
const initAddButton = () => {

  const addBtn =
    document.getElementById(
      'addCategoryBtn'
    );

  if (!addBtn) return;

  addBtn.addEventListener(
    'click',
    () => {

      editId = null;

      document.getElementById(
        'categoryForm'
      ).reset();


      document.getElementById(
        'modalTitle'
      ).textContent =
        'Add Category';
    }
  );
};