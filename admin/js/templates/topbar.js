export default () => `
<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

  <ul class="navbar-nav ml-auto">

    <li class="nav-item dropdown no-arrow">
      <a class="nav-link dropdown-toggle" href="#">
        <span id="loggedInUser"
          class="mr-2 d-none d-lg-inline text-gray-600 small">
          Loading...
        </span>
      </a>
    </li>

    <li class="nav-item">
      <button
        class="btn btn-danger btn-sm"
        data-logout
      >
        Logout
      </button>
    </li>

  </ul>

</nav>
`;
1