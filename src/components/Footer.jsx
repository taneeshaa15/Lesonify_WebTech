import React from "react";
import "./css/footer.css";

function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundImage: "url('./images/footer-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <div className="wave-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#eee"
            fill-opacity="1"
            d="M0,96L40,101.3C80,107,160,117,240,128C320,139,400,149,480,138.7C560,128,640,96,720,90.7C800,85,880,107,960,128C1040,149,1120,171,1200,186.7C1280,203,1360,213,1400,218.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="footer-shape">
        <img src="images/shape/footer-shape.png" alt="footer shape" />
      </div>
      <div className="container">
        <div className="footer-widget pt-30 pb-70">
          <div className="row">
            <div className="col-lg-3 col-sm-6 order-sm-1 order-lg-1">
              <div
                className="footer-about pt-40 wow fadeInLeftBig"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                style={{ marginTop: "-150px", marginLeft: "-120px" }}
              >
                <a href="#">
                  <img src="images/logo.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 order-sm-3 order-lg-2">
              <div
                className="footer-link pt-40 wow fadeInLeftBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="footer-title">
                  <h5 className="title">Features</h5>
                </div>
                <ul>
                  <li>
                    <a href="/assesment">Assessments</a>
                  </li>
                  <li>
                    <a href="/eeg-reports">EEG Report</a>
                  </li>
                  <li>
                    <a href="/dashboard">Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 order-sm-4 order-lg-3">
              <div
                className="footer-link pt-40 wow fadeInLeftBig"
                data-wow-duration="1s"
                data-wow-delay="0.7s"
              >
                <div className="footer-title">
                  <h5 className="title">About Us</h5>
                </div>
                <ul>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorem ipsum dolor</a>
                  </li>
                  <li>
                    <a href="#">Lorem ipsum dolor</a>
                  </li>
                  <li>
                    <a href="#">Lorem ipsum dolor</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 order-sm-2 order-lg-4">
              <div
                className="footer-contact pt-40 wow fadeInLeftBig"
                data-wow-duration="1s"
                data-wow-delay="0.9s"
              >
                <div className="footer-title">
                  <h5 className="title">Contact Info</h5>
                </div>
                <div className="contact pt-10">
                  <p className="text"> Jabalpur, India</p>
                  <p className="text">NeuroTrain@gmail.com</p>
                  <p className="text">+99 000 000 00 00</p>

                  <ul className="social mt-40">
                    <li>
                      <a href="#">
                        <i className="lni-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
