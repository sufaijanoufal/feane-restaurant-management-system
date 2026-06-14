export const renderOfferPage = () => {
  const page =
    document.getElementById(
      'pageContent'
    );

  page.innerHTML = `

<div class="d-sm-flex align-items-center justify-content-between mb-4">

  <h1 class="h3 mb-0 text-gray-800">
    Offers
  </h1>

  <button
    class="btn btn-primary"
    data-toggle="modal"
    data-target="#offerModal"
    id="addOfferBtn"
  >
    <i class="fas fa-plus"></i>
    Add Offer
  </button>

</div>

<div class="card shadow mb-4">

  <div class="card-header py-3">

    <h6 class="m-0 font-weight-bold text-primary">
      Offer List
    </h6>

  </div>

  <div class="card-body">

    <div class="table-responsive">

      <table class="table table-bordered">

        <thead>

          <tr>

            <th>Image</th>
            <th>Title</th>
            <th>Discount</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th width="180">
              Actions
            </th>

          </tr>

        </thead>

        <tbody id="offerTableBody">
        </tbody>

      </table>

    </div>

  </div>

</div>

<!-- MODAL -->

<div
  class="modal fade"
  id="offerModal"
  tabindex="-1"
>

  <div class="modal-dialog">

    <div class="modal-content">

      <div class="modal-header">

        <h5
          class="modal-title"
          id="offerModalTitle"
        >
          Add Offer
        </h5>

        <button
          type="button"
          class="close"
          data-dismiss="modal"
        >
          <span>&times;</span>
        </button>

      </div>

      <form id="offerForm">

        <div class="modal-body">

          <div class="form-group">

            <label>
              Title
            </label>

            <input
              type="text"
              class="form-control"
              id="offerTitle"
              required
            />

          </div>

          <div class="form-group">

            <label>
              Description
            </label>

            <textarea
              class="form-control"
              id="offerDescription"
              rows="3"
            ></textarea>

          </div>

          <div class="form-group">

            <label>
              Discount Text
            </label>

            <input
              type="text"
              class="form-control"
              id="offerDiscountText"
            />

          </div>

          <div class="form-group">

            <label>
              Button Text
            </label>

            <input
              type="text"
              class="form-control"
              id="offerButtonText"
            />

          </div>

          <div class="form-group">

            <label>
              Button Link
            </label>

            <input
              type="text"
              class="form-control"
              id="offerButtonLink"
            />

          </div>

          <div class="form-group">

            <label>
              Start Date
            </label>

            <input
              type="date"
              class="form-control"
              id="offerStartDate"
            />

          </div>

          <div class="form-group">

            <label>
              End Date
            </label>

            <input
              type="date"
              class="form-control"
              id="offerEndDate"
            />

          </div>

          <div class="form-group">

            <label>
              Offer Image
            </label>

            <input
              type="file"
              class="form-control"
              id="offerImage"
              accept="image/*"
            />

            <img
              id="offerPreview"
              width="100"
              class="mt-2 rounded"
            />

          </div>

          <div class="form-group">

            <label>

              <input
                type="checkbox"
                id="offerIsActive"
                checked
              />

              Active

            </label>

          </div>

        </div>

        <div class="modal-footer">

          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="btn btn-primary"
          >
            Save
          </button>

        </div>

      </form>

    </div>

  </div>

</div>

`;
};


export const renderOffer = offers => {

  const tbody =
    document.getElementById(
      'offerTableBody'
    );

  tbody.innerHTML = offers
    .map(
      offer => `

<tr>

  <td>

    <img
      src="${
        offer.image
          ? `/uploads/offer/${offer.image}`
          : '/uploads/img/default.png'
      }"
      width="60"
      height="60"
      style="
        object-fit:cover;
        border-radius:8px;
      "
    />

  </td>

  <td>${offer.title}</td>

  <td>
    ${offer.discountText || ''}
  </td>

  <td>
    ${offer.startDate
      ? offer.startDate.split('T')[0]
      : ''}
  </td>

  <td>
    ${offer.endDate
      ? offer.endDate.split('T')[0]
      : ''}
  </td>

  <td>
    ${
      offer.isActive
        ? 'Active'
        : 'Inactive'
    }
  </td>

  <td>

    <button
      class="btn btn-info btn-sm edit-btn"
      data-id="${offer._id}"
      data-title="${offer.title}"
      data-description="${offer.description}"
      data-discounttext="${offer.discountText}"
      data-buttontext="${offer.buttonText}"
      data-buttonlink="${offer.buttonLink}"
      data-startdate="${offer.startDate}"
      data-enddate="${offer.endDate}"
      data-isactive="${offer.isActive}"
      data-image="${offer.image}"
    >
      Edit
    </button>

  </td>

</tr>

`
    )
    .join('');
};