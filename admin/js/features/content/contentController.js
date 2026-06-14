import * as model from './contentModel.js';

import {
  renderContentPage,
  renderContent
} from './contentView.js';

let editId = null;

export const initContent = async () => {

  // RENDER PAGE FIRST
  renderContentPage();

  // LOAD DATA
  await loadContent();

  // ATTACH EVENTS
  initCreateOrUpdate();

  initEdit();

  initAddButton();
};

// LOAD CATEGORIES
const loadContent = async () => {

  const content =
    await model.getContent();

  renderContent(content);
};

// CREATE / UPDATE
const initCreateOrUpdate = () => {

  const form =
    document.getElementById('contentForm');

  if (!form) return;

  form.addEventListener(
    'submit',
    async e => {

      e.preventDefault();

      try {

        const formData =
          new FormData();

       formData.append(
  'type',
  document.getElementById(
    'contentType'
  ).value
);

formData.append(
  'title',
  document.getElementById(
    'contentTitle'
  ).value
);

formData.append(
  'subtitle',
  document.getElementById(
    'contentSubtitle'
  ).value
);

formData.append(
  'description',
  document.getElementById(
    'contentDescription'
  ).value
);

        const image =
          document.getElementById(
            'contentImage'
          ).files[0];

        if (image) {
          formData.append(
            'image',
            image
          );
        }

        if (editId) {

          await model.updateContent(
            editId,
            formData
          );

        } else {

          await model.createContent(
            formData
          );
        }

        form.reset();

        editId = null;

        document.getElementById(
          'contentPreview'
        ).src = '';

        $('#contentModal').modal('hide');

        await loadContent();

      } catch (err) {

  console.log(err.response?.data);

  console.error(err);

  alert(
    err.response?.data?.message ||
    err.message
  );
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
          'contentType'
        ).value =
          e.target.dataset.type;
          document.getElementById(
          'contentTitle'
        ).value =
          e.target.dataset.title;
          document.getElementById(
          'contentSubtitle'
        ).value =
          e.target.dataset.subtitle;
          document.getElementById(
          'contentDescription'
        ).value =
          e.target.dataset.description;

        document.getElementById(
          'contentPreview'
        ).src =
          `/uploads/content/${e.target.dataset.image}`;

        document.getElementById(
          'modalTitle'
        ).textContent =
          'Edit Content';

        $('#contentModal').modal(
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
      'addContentBtn'
    );

  if (!addBtn) return;

  addBtn.addEventListener(
    'click',
    () => {

      editId = null;

      document.getElementById(
        'contentForm'
      ).reset();

      document.getElementById(
        'contentPreview'
      ).src = '';

      document.getElementById(
        'modalTitle'
      ).textContent =
        'Add Content';
    }
  );
};