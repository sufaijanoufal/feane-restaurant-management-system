export const renderMenuPage = () => {
  const page =
    document.getElementById(
      'pageContent'
    );

  page.innerHTML = `

    <div class="d-sm-flex align-items-center justify-content-between mb-4">

      <h1 class="h3 mb-0 text-gray-800">
        Menus
      </h1>
<div
  class="d-flex justify-content-between mb-3"
>

 <div class="mb-4 w-50">

  <input
    type="text"
    class="form-control form-control-lg"
    id="menuSearch"
    placeholder="Search menu..."
  />

</div>

</div>
      <button
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#menuModal"
        id="addMenuBtn"
      >
        <i class="fas fa-plus"></i>
        Add Menu
      </button>

    </div>

    <div class="card shadow mb-4">

      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          Menu List
        </h6>
      </div>

      <div class="card-body">

        <div class="table-responsive">

          <table
            class="table table-bordered"
          >

            <thead>
              <tr>
                <th>Images</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th width="180">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody id="menuTableBody">
            </tbody>

          </table>

        </div>

      </div>

    </div>
    <div
  class="d-flex justify-content-center mt-4"
>

  <div id="pagination">
  </div>

</div>

    <!-- MODAL -->
    <div
      class="modal fade"
      id="menuModal"
      tabindex="-1"
      role="dialog"
    >

      <div
        class="modal-dialog"
        role="document"
      >

        <div class="modal-content">

          <div class="modal-header">

            <h5
              class="modal-title"
              id="menuModalTitle"
            >
              Add Menu
            </h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
            >
              <span>&times;</span>
            </button>

          </div>

          <form id="menuForm">

            <div class="modal-body">

              <div class="form-group">

                <label>
                  Menu Name
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="menuName"
                  required
                />

              </div>

              <div class="form-group">

                <label>
                  Price
                </label>

                <input
                  type="number"
                  class="form-control"
                  id="menuPrice"
                  required
                />

              </div>

              <div class="form-group">

                <label>
                  Category
                </label>

                <select
                  class="form-control"
                  id="menuCategory"
                >
                </select>

              </div>

              <div class="form-group">

                <label>
                  Description
                </label>

                <textarea
                  class="form-control"
                  id="menuDescription"
                ></textarea>

              </div>

              <div class="form-group">

                <label>
                  Images
                </label>

                <input
                  type="file"
                  class="form-control"
                  id="menuImages"
                  multiple
                  accept="image/*"
                />

              </div>

              <div
                id="imagePreview"
                class="d-flex flex-wrap gap-2"
              >
              </div>

              <div class="form-group mt-3">

                <label>

                  <input
                    type="checkbox"
                    id="menuAvailable"
                    checked
                  />

                  Available

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
     <!-- GALLERY MODAL -->
<div
  class="modal fade"
  id="galleryModal"
  tabindex="-1"
>

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header">

        <h5 class="modal-title">
          Menu Gallery
        </h5>

        <button
          type="button"
          class="close"
          data-dismiss="modal"
        >
          <span>&times;</span>
        </button>

      </div>

      <div class="modal-body">

        <div
          id="galleryContainer"
          class="d-flex flex-wrap gap-3"
        >
        </div>

      </div>

    </div>

  </div>

</div>
  `;
};

export const renderCategories =
  categories => {

    const select =
      document.getElementById(
        'menuCategory'
      );

    select.innerHTML = categories
      .map(
        cat => `
<option value="${cat._id}">
  ${cat.name}
</option>
`
      )
      .join('');
  };

export const renderMenus = menus => {

  const tbody =
    document.getElementById(
      'menuTableBody'
    );

  tbody.innerHTML = menus
    .map(
      menu => `
<tr>

<td>

  ${
    menu.images?.length
      ? `
        <div
          class="d-flex align-items-center"
        >

          <img
            src="/uploads/menus/${menu.images[0]}"
            width="60"
            height="60"
            style="
              object-fit: cover;
              border-radius: 8px;
            "
          />

          ${
            menu.images.length > 1
              ? `
                <button
                  class="btn btn-sm btn-link view-gallery-btn"

                  data-images='${JSON.stringify(menu.images)}'
                >
                  +${
                    menu.images.length - 1
                  } more
                </button>
              `
              : ''
          }

        </div>
      `
      : ''
  }

</td>

<td>${menu.name}</td>

<td>
  ${menu.category?.name || ''}
</td>

<td>
  SAR ${menu.price}
</td>

<td>
  ${
    menu.isAvailable
      ? 'Available'
      : 'Unavailable'
  }
</td>

<td>

  <button
  class="btn btn-sm btn-info menu-edit-btn"

  data-id="${menu._id}"

  data-name="${menu.name}"

  data-price="${menu.price}"

  data-description="${menu.description || ''}"

  data-category="${
    menu.category?._id || ''
  }"

  data-available="${
    menu.isAvailable
  }"
   data-images='${JSON.stringify(menu.images)}'
>
  Edit
</button>

  <button
    class="btn btn-sm btn-danger menu-delete-btn"
    data-id="${menu._id}"
  >
    Delete
  </button>

</td>

</tr>
`
    )
    .join('');
    
};

export const previewImages =
  files => {

    const preview =
      document.getElementById(
        'imagePreview'
      );

    preview.innerHTML = '';

    Array.from(files).forEach(
      file => {

        const reader =
          new FileReader();

        reader.onload = e => {

          preview.innerHTML += `
<img
  src="${e.target.result}"
  width="80"
  height="80"
  style="
    object-fit: cover;
    border-radius: 8px;
  "
/>
`;
        };

        reader.readAsDataURL(file);
      }
    );
  };
  export const renderPagination =
  totalResults => {

    const totalPages =
      Math.ceil(
        totalResults / 5
      );

    const container =
      document.getElementById(
        'pagination'
      );

    let html = '';

    for (
      let i = 1;
      i <= totalPages;
      i++
    ) {

      html += `

<button
  class="btn btn-sm btn-outline-primary mx-1 pagination-btn"

  data-page="${i}"
>
  ${i}
</button>
`;
    }

    container.innerHTML =
      html;
  };
 