export const renderProfilePage =
  () => {

    const page =
      document.getElementById(
        'pageContent'
      );

    page.innerHTML = `

<div class="container-fluid">

  <h1
    class="h3 mb-4 text-gray-800"
  >
    Profile
  </h1>

  <div class="row">

    <!-- PROFILE CARD -->
    <div class="col-lg-6">

      <div class="card shadow mb-4">

        <div class="card-header py-3">
          <h6
            class="m-0 font-weight-bold text-primary"
          >
            Account Details
          </h6>
        </div>

        <div class="card-body">

          <form id="profileForm">

            <div class="form-group">

              <label>Name</label>

              <input
                type="text"
                class="form-control"
                id="profileName"
              />

            </div>

            <div class="form-group">

              <label>Email</label>

              <input
                type="email"
                class="form-control"
                id="profileEmail"
              />

            </div>
            <div class="form-group">

  <label>
    Profile Photo
  </label>

  <input
    type="file"
    class="form-control"
    id="profilePhoto"
    accept="image/*"
  />

  <img
    id="profilePreview"
    width="100"
    class="mt-3 rounded"
    style="
      object-fit: cover;
    "
  />

</div>

            <button
              type="submit"
              class="btn btn-primary"
            >
              Save Changes
            </button>

          </form>

        </div>

      </div>

    </div>

    <!-- PASSWORD CARD -->
    <div class="col-lg-6">

      <div class="card shadow mb-4">

        <div class="card-header py-3">

          <h6
            class="m-0 font-weight-bold text-primary"
          >
            Change Password
          </h6>

        </div>

        <div class="card-body">

          <form id="passwordForm">

            <div class="form-group">

              <label>
                Current Password
              </label>

              <input
                type="password"
                class="form-control"
                id="passwordCurrent"
              />

            </div>

            <div class="form-group">

              <label>
                New Password
              </label>

              <input
                type="password"
                class="form-control"
                id="password"
              />

            </div>

            <div class="form-group">

              <label>
                Confirm Password
              </label>

              <input
                type="password"
                class="form-control"
                id="passwordConfirm"
              />

            </div>

            <button
              type="submit"
              class="btn btn-primary"
            >
              Update Password
            </button>

          </form>

        </div>

      </div>

    </div>

  </div>

</div>
`;
  };

export const renderUser =
  user => {

    document.getElementById(
      'profileName'
    ).value = user.name;

    document.getElementById(
      'profileEmail'
    ).value = user.email;
    
    document.getElementById(
  'profilePreview'
).src =
  `/uploads/users/${user.photo}`;
  };