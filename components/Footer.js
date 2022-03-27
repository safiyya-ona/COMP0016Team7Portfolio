class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // this.innerHTML = menubarHTML.toString();
        this.innerHTML = `<footer id="footer">
        <div class="container">
          <div class="row">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="footer-widget">
                <h4>Site Information</h4>
                <p>This is the portfolio for the Clinical QR Kit project by Team 7 of the COMP0016 2021-2022 Cohort</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="footer-widget">
                <h4>Site Menu</h4>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="requirements.html">Requirements</a></li>
                  <li><a href="research.html">Research</a></li>
                </ul>
                <ul>
                  <li><a href="hci.html">HCI</a></li>
                  <li><a href="system.html">System Design</a></li>
                  <li><a href="implementation.html">Implementation</a></li>
                </ul>
                <ul>
                  <li><a href="testing.html">Testing</a></li>
                  <li><a href="evaluation.html">Evaluation</a></li>
                  <li><a href="appendices.html">Appendices</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="footer-widget">
                <h4>Project Supporters</h4>
                <div class="logo">
                  <img src="assets/images/nhslogo.png" alt="">
                </div>
                <div class="logo">
                  <img src="assets/images/ucllogo.png" alt="">
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="copyright-text">
                <p>Copyright © 2022. All Rights Reserved. 
              <br>Design: <a href="https://templatemo.com/" target="_blank" title="css templates">TemplateMo</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>`;
    }
}

customElements.define("footer-component", Footer);
