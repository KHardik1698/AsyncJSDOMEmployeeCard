export const renderFooter = () => {
  let pageFooter = document.createElement("div");
  pageFooter.innerHTML = `
  <div class="footer-description">
    <p>Ready to get started on your next project?</p>
  </div>
  <div class="blue-button">
    <a href="">Get in Touch</a>
  </div>
  <div class="footer-icons">
    <i class="fa fa-twitter"></i>
    <i class="fa fa-linkedin"></i>
    <i class="fa fa-facebook"></i>
  </div>
  <div class="copyright">
    <a href="">Privacy</a>
    <a href="">Backend Term of use</a>
    <p>Copyright &copy 2020 Raw Engineering LLC. All Rights Reserved.</p>
    <img src="./images/soc_logo.png" alt="" />
  </div>
  `;
  pageFooter.className = "footer-container";
  return pageFooter;
};
