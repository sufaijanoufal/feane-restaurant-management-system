export default () => `
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">

  <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#dashboard">
    <div class="sidebar-brand-text mx-3">
      Admin
    </div>
  </a>

  <hr class="sidebar-divider">

  <li class="nav-item">
    <a class="nav-link" href="#dashboard">
      <span>Dashboard</span>
    </a>
  </li>
<a
  class="nav-link"
  href="/admin/?page=profile"
>
  <i class="fas fa-user"></i>

  <span>
    Profile
  </span>
</a>
  <li class="nav-item">
    <a class="nav-link" href="/admin/?page=categories">
      <span>Categories</span>
    </a>
  </li>
  <li class="nav-item">
     <a class="nav-link" href="/admin/?page=menus"><i class="fas fa-utensils"></i>
     <span>Menus</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/admin/?page=orders">
    <i class="fas fa-shopping-bag"></i>
    <span> Orders </span>
    </a>
  </li>
  <li class="nav-item">
     <a class="nav-link" href="/admin/?page=content"><i class="fas fa-utensils"></i>
     <span>Contents</span>
    </a>
  </li>
    <li class="nav-item">
     <a class="nav-link" href="/admin/?page=testimonial"><i class="fas fa-utensils"></i>
     <span>Testimonial</span>
    </a>
  </li>
  <li class="nav-item">
     <a class="nav-link" href="/admin/?page=booking"><i class="fas fa-utensils"></i>
     <span>Booking</span>
    </a>
  </li>
  <li class="nav-item">
     <a class="nav-link" href="/admin/?page=offers"><i class="fas fa-utensils"></i>
     <span>Offers</span>
    </a>
  </li>

</ul>
`;