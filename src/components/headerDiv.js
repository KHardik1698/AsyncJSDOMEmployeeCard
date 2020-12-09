export const renderHeader = () => {
  let pageHeader = document.createElement("div");
  pageHeader.innerHTML = `
  <div class="logo-container">
    <div class="logo">
      <img
        src="./images/header-logo.png"
        alt="Raw Engineering"
        class="logo-img"
      />
    </div>
  </div>
  <div class="nav-container">
    <ul>
      <li class="nav-items">
        <a href="" class="nav-links">Home</a>
      </li>
      <li class="nav-items">
        <a href="index.html" class="nav-links">Our Team</a>
      </li>
      <li class="nav-items">
        <a href="" class="nav-links">Careers</a>
      </li>
      <li class="nav-items blue-button">
        <a href="" class="nav-links">Contact</a>
      </li>
    </ul>
  </div>
  <div class="hamburger">
    <i class="fa fa-bars fa-3x"></i>
  </div>
  `;
  pageHeader.className = "header-container";
  return pageHeader;
};
