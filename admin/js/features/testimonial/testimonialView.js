export const renderTestimonialPage = () => {
  const page = document.getElementById('pageContent');

  page.innerHTML = `
  
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Testimonial</h1>

      
    </div>

    <div class="card shadow mb-4">
      
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          Testimonial List
        </h6>
      </div>

      <div class="card-body">

        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="contentTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                 <th>Role</th>
                  <th>Rating</th>
                   <th>Review</th>
                <th>Image</th>
                <th width="180">Actions</th>
              </tr>
            </thead>

            <tbody id="testimonialTableBody">
            </tbody>

          </table>
        </div>

      </div>
    </div>

    <!-- MODAL -->
    <div
      class="modal fade"
      id="testimonialModal"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="modalTitle">
              Add Testimonial
            </h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
            >
              <span>&times;</span>
            </button>
          </div>

          <form id="testimonialForm">

            <div class="modal-body">

              <input type="hidden" id="testimonialId" />

              <div class="form-group">
                <label>Testimonial Name</label>

                <input
                  type="text"
                  class="form-control"
                  id="testimonialName"
                  required
                />
              </div>
               <div class="form-group">
                <label>Testimonial Role</label>

                <input
                  type="text"
                  class="form-control"
                  id="testimonialRole"
                  required
                />
              </div>
               <div class="form-group">
                <label>Testimonial Rating</label>

                <input
                  type="text"
                  class="form-control"
                  id="testimonialRating"
                  required
                />
              </div>
               <div class="form-group">
                <label>Testimonial Review</label>

                <input
                  type="text"
                  class="form-control"
                  id="testimonialReview"
                  required
                />
              </div>

              <div class="form-group">

                <label>Testimonial Image</label>

                <input
                  type="file"
                  class="form-control"
                  id="testimonialImage"
                  accept="image/*"
                />

                <img
                  id="testimonialPreview"
                  width="80"
                  class="mt-2 rounded"
                />

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

export const renderTestimonial = testimonial => {
  const tbody =
    document.getElementById(
      'testimonialTableBody'
    );

  tbody.innerHTML = testimonial
    .map(
      test => `
        <tr>

          <td>${test.name}</td>
           <td>${test.role}</td>
            <td>${test.rating}</td>
             <td>${test.review}</td>

          <td>
            <img
              src="${
                test.image
                  ? `/uploads/testimonial/${test.image}`
                  : '/uploads/img/default.png'
              }"
              width="60"
              height="60"
              style="
                object-fit: cover;
                border-radius: 8px;
              "
            />
          </td>

          <td>

            <button
              class="btn btn-sm btn-info edit-btn"
              data-id="${test._id}"
              data-name="${test.name}"
              data-role="${test.role}"
              data-rating="${test.rating}"
              data-review="${test.review}"
              data-image="${test.image}"
            >
              Edit
            </button>

          

          </td>

        </tr>
      `
    )
    .join('');
};