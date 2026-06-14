import * as model from './testimonialModel.js';

import {
  renderTestimonialPage,
  renderTestimonial
} from './testimonialView.js';

let editId = null;

export const initTestimonial = async () => {

  // RENDER PAGE FIRST
  renderTestimonialPage();

  // LOAD DATA
  await loadTestimonial();

  // ATTACH EVENTS
  initCreateOrUpdate();

  initEdit();

  initAddButton();
};

// LOAD data
const loadTestimonial = async () => {

  const testimonial =
    await model.getTestimonial();

  renderTestimonial(testimonial);
};

// CREATE / UPDATE
const initCreateOrUpdate = () => {

  const form =
    document.getElementById('testimonialForm');

  if (!form) return;

  form.addEventListener(
    'submit',
    async e => {

      e.preventDefault();

      try {

        const formData =
          new FormData();

       formData.append(
  'name',
  document.getElementById(
    'testimonialName'
  ).value
);

formData.append(
  'role',
  document.getElementById(
    'testimonialRole'
  ).value
);

formData.append(
  'review',
  document.getElementById(
    'testimonialReview'
  ).value
);

formData.append(
  'rating',
  document.getElementById(
    'testimonialRating'
  ).value
);

        const image =
          document.getElementById(
            'testimonialImage'
          ).files[0];

        if (image) {
          formData.append(
            'image',
            image
          );
        }

        if (editId) {

          await model.updateTestimonial(
            editId,
            formData
          );

        } else {

          await model.createtestimonial(
            formData
          );
        }

        form.reset();

        editId = null;

        document.getElementById(
          'testimonialPreview'
        ).src = '';

        $('#testimonialModal').modal('hide');

        await loadTestimonial();

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
          'testimonialName'
        ).value =
          e.target.dataset.name;
          document.getElementById(
          'testimonialRole'
        ).value =
          e.target.dataset.role;
          document.getElementById(
          'testimonialRating'
        ).value =
          e.target.dataset.rating;
          document.getElementById(
          'testimonialReview'
        ).value =
          e.target.dataset.review;

        document.getElementById(
          'testimonialPreview'
        ).src =
          `/uploads/testimonial/${e.target.dataset.image}`;

        document.getElementById(
          'modalTitle'
        ).textContent =
          'Edit Testimonial';

        $('#testimonialModal').modal(
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
      'addTestimonialBtn'
    );

  if (!addBtn) return;

  addBtn.addEventListener(
    'click',
    () => {

      editId = null;

      document.getElementById(
        'testimonialForm'
      ).reset();

      document.getElementById(
        'testimonialPreview'
      ).src = '';

      document.getElementById(
        'modalTitle'
      ).textContent =
        'Add Testimonial';
    }
  );
};