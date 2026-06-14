import * as model from './offerModel.js';

import {
  renderOfferPage,
  renderOffer
} from './offerView.js';

let editId = null;

export const initOffer = async () => {
  renderOfferPage();

  await loadOffer();

  initCreateOrUpdate();

  initEdit();

  initAddButton();
};

const loadOffer = async () => {
  const offers = await model.getOffer();

  renderOffer(offers);
};

const initCreateOrUpdate = () => {
  const form =
    document.getElementById('offerForm');

  if (!form) return;

  form.addEventListener(
    'submit',
    async e => {

      e.preventDefault();

      try {

        const formData =
          new FormData();

        formData.append(
          'title',
          document.getElementById(
            'offerTitle'
          ).value
        );

        formData.append(
          'description',
          document.getElementById(
            'offerDescription'
          ).value
        );

        formData.append(
          'discountText',
          document.getElementById(
            'offerDiscountText'
          ).value
        );

        formData.append(
          'buttonText',
          document.getElementById(
            'offerButtonText'
          ).value
        );

        formData.append(
          'buttonLink',
          document.getElementById(
            'offerButtonLink'
          ).value
        );

        formData.append(
          'startDate',
          document.getElementById(
            'offerStartDate'
          ).value
        );

        formData.append(
          'endDate',
          document.getElementById(
            'offerEndDate'
          ).value
        );

        formData.append(
          'isActive',
          document.getElementById(
            'offerIsActive'
          ).checked
        );

        const image =
          document.getElementById(
            'offerImage'
          ).files[0];

        if (image) {
          formData.append(
            'image',
            image
          );
        }

        if (editId) {

          await model.updateOffer(
            editId,
            formData
          );

        } else {

          await model.createOffer(
            formData
          );
        }

        form.reset();

        editId = null;

        document.getElementById(
          'offerPreview'
        ).src = '';

        $('#offerModal').modal(
          'hide'
        );

        await loadOffer();

      } catch (err) {

        console.log(err);

        alert(
          err.response?.data?.message ||
          err.message
        );
      }
    }
  );
};

const initEdit = () => {

  document.addEventListener(
    'click',
    e => {

      if (
        !e.target.classList.contains(
          'edit-btn'
        )
      )
        return;

      editId =
        e.target.dataset.id;

      document.getElementById(
        'offerTitle'
      ).value =
        e.target.dataset.title;

      document.getElementById(
        'offerDescription'
      ).value =
        e.target.dataset.description;

      document.getElementById(
        'offerDiscountText'
      ).value =
        e.target.dataset.discounttext;

      document.getElementById(
        'offerButtonText'
      ).value =
        e.target.dataset.buttontext;

      document.getElementById(
        'offerButtonLink'
      ).value =
        e.target.dataset.buttonlink;

      document.getElementById(
        'offerStartDate'
      ).value =
        e.target.dataset.startdate
          ?.split('T')[0] || '';

      document.getElementById(
        'offerEndDate'
      ).value =
        e.target.dataset.enddate
          ?.split('T')[0] || '';

      document.getElementById(
        'offerIsActive'
      ).checked =
        e.target.dataset.isactive ===
        'true';

      document.getElementById(
        'offerPreview'
      ).src =
        `/uploads/offer/${e.target.dataset.image}`;

      document.getElementById(
        'offerModalTitle'
      ).textContent =
        'Edit Offer';

      $('#offerModal').modal(
        'show'
      );
    }
  );
};

const initAddButton = () => {

  const addBtn =
    document.getElementById(
      'addOfferBtn'
    );

  if (!addBtn) return;

  addBtn.addEventListener(
    'click',
    () => {

      editId = null;

      document.getElementById(
        'offerForm'
      ).reset();

      document.getElementById(
        'offerPreview'
      ).src = '';

      document.getElementById(
        'offerModalTitle'
      ).textContent =
        'Add Offer';
    }
  );
};