export const renderCategoryPage = () => {
  const page = document.getElementById('pageContent');

  page.innerHTML = `
  
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Categories</h1>

      <button
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#categoryModal"
        id="addCategoryBtn"
      >
        <i class="fas fa-plus"></i> Add Category
      </button>
    </div>

    <div class="card shadow mb-4">
      
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          Category List
        </h6>
      </div>

      <div class="card-body">

        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="categoryTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
               
                <th width="180">Actions</th>
              </tr>
            </thead>

            <tbody id="categoryTableBody">
            </tbody>

          </table>
        </div>

      </div>
    </div>

    <!-- MODAL -->
    <div
      class="modal fade"
      id="categoryModal"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="modalTitle">
              Add Category
            </h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
            >
              <span>&times;</span>
            </button>
          </div>

          <form id="categoryForm">

            <div class="modal-body">

              <input type="hidden" id="categoryId" />

              <div class="form-group">
                <label>Category Name</label>

                <input
                  type="text"
                  class="form-control"
                  id="categoryName"
                  required
                />
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

export const renderCategories = categories => {
  const tbody =
    document.getElementById(
      'categoryTableBody'
    );

  tbody.innerHTML = categories
    .map(
      cat => `
        <tr>

          <td>${cat.name}</td>

         

          <td>

            <button
              class="btn btn-sm btn-info edit-btn"
              data-id="${cat._id}"
              data-name="${cat.name}"
             
            >
              Edit
            </button>

            <button
              class="btn btn-sm btn-danger delete-btn"
              data-id="${cat._id}"
            >
              Delete
            </button>

          </td>

        </tr>
      `
    )
    .join('');
};