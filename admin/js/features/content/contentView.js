export const renderContentPage = () => {
  const page = document.getElementById('pageContent');

  page.innerHTML = `
  
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Content</h1>

      
    </div>

    <div class="card shadow mb-4">
      
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          Content List
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
                <th>Type</th>
                 <th>Title</th>
                  <th>SubTitle</th>
                   <th>Description</th>
                <th>Image</th>
                <th width="180">Actions</th>
              </tr>
            </thead>

            <tbody id="contentTableBody">
            </tbody>

          </table>
        </div>

      </div>
    </div>

    <!-- MODAL -->
    <div
      class="modal fade"
      id="contentModal"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="modalTitle">
              Add Content
            </h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
            >
              <span>&times;</span>
            </button>
          </div>

          <form id="contentForm">

            <div class="modal-body">

              <input type="hidden" id="contentId" />

              <div class="form-group">
                <label>Content Type</label>

                <input
                  type="text"
                  class="form-control"
                  id="contentType"
                  required
                />
              </div>
               <div class="form-group">
                <label>Content Title</label>

                <input
                  type="text"
                  class="form-control"
                  id="contentTitle"
                  required
                />
              </div>
               <div class="form-group">
                <label>Content Subtitle</label>

                <input
                  type="text"
                  class="form-control"
                  id="contentSubtitle"
                  required
                />
              </div>
               <div class="form-group">
                <label>Content Description</label>

                <input
                  type="text"
                  class="form-control"
                  id="contentDescription"
                  required
                />
              </div>

              <div class="form-group">

                <label>Content Image</label>

                <input
                  type="file"
                  class="form-control"
                  id="contentImage"
                  accept="image/*"
                />

                <img
                  id="contentPreview"
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

export const renderContent = content => {
  const tbody =
    document.getElementById(
      'contentTableBody'
    );

  tbody.innerHTML = content
    .map(
      cont => `
        <tr>

          <td>${cont.type}</td>
           <td>${cont.title}</td>
            <td>${cont.subtitle}</td>
             <td>${cont.description}</td>

          <td>
            <img
              src="${
                cont.image
                  ? `/uploads/content/${cont.image}`
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
              data-id="${cont._id}"
              data-type="${cont.type}"
              data-title="${cont.title}"
              data-subtitle="${cont.subtitle}"
              data-description="${cont.description}"
              data-image="${cont.image}"
            >
              Edit
            </button>

          

          </td>

        </tr>
      `
    )
    .join('');
};