import React, { useEffect } from "react";
import "./css/landing.css";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        id="home"
        className="header-hero bg_cover d-lg-flex align-items-center"
        style={{ backgroundImage: "url('./images/header-hero.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="header-hero-content"
                style={{ marginTop: "-100px" }}
              >
                <h2
                  className="hero-title wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  Making a difference in the lives of early and slow learners
                </h2>
                <div
                  className="header-play wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.8s"
                >
                  <a className="play-btn" href="/screening">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="header-hero-image d-flex align-items-center wow fadeInRightBig"
          data-wow-duration="1s"
          data-wow-delay="1.1s"
          style={{ marginTop: "-100px" }}
        >
          <div className="image">
            <img src="images/hero-image.png" alt="Hero Image" />
          </div>
        </div>

        <div className="header-shape" style={{ bottom: "-80px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#eee"
              fill-opacity="1"
              d="M0,192C120,176,240,160,360,160C480,160,600,176,720,160C840,144,960,96,1080,112C1200,128,1320,208,1440,224V320H1320C1200,320,1080,320,960,320C840,320,720,320,600,320C480,320,360,320,240,320C120,320,0,320,0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <section
        id="about"
        className="about-area pt-110 pb-120"
        style={{ marginTop: "-120px", zIndex: "11", position: "relative" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div
                className="about-title text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <h6 className="welcome">WELCOME</h6>
                <h3 className="title">
                  Know more about <span>NeuroTrain</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-image mt-50 wow fadeInLeftBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
                style={{ marginLeft: "-150px" }}
              >
                <img src="images/remote-learning.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-content paraAbout mt-50 wow fadeInRightBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h3 className="title">Assessments</h3>
                <ul className="about-line">
                  <p className="text">
                    NeuroTrain uses interactive learning assessments to identify
                    gaps in a child’s academic profile.
                  </p>
                  <li></li>
                </ul>
                <h3 className="title">Progress reports</h3>
                <ul className="about-line">
                  <p className="text">
                    Get personalized detailed error reports on their learning
                    and mistakes.
                  </p>
                  <li></li>
                </ul>
                <h3 className="title">Practice Sections</h3>
                <ul className="about-line">
                  <p className="text">
                    Interactive lessons and trusted methods to assist students
                    in learning at their own pace
                  </p>
                  <li></li>
                </ul>

                <div className="about-counter pt-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="analysis-area pt-115 pb-120 bg_cover"
        style={{ backgroundImage: "url('./images/analysis.jpg')" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div
                className="analysis-title text-center pb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <h4 className="title">
                  How common are Cognitive Disabilities?
                </h4>
              </div>
            </div>
          </div>
          <div className="analysis-counter">
            <div className="row">
              <div className="col-md-3 col-6">
                <div
                  className="single-analysis-counter mt-30 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.7s"
                >
                  <span className="count">
                    <span className="counter">10.8</span>
                    <span className="plus">%</span>
                  </span>
                  <p className="text">Cognitive Disability</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div
                  className="single-analysis-counter mt-30 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <span className="count">
                    <span className="counter">1.2</span>
                    <span className="plus">%</span>
                  </span>
                  <p className="text">Autism Spectrum Disorder</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div
                  className="single-analysis-counter mt-30 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <span className="count">
                    <span className="counter">7.4</span>
                    <span className="plus">%</span>
                  </span>
                  <p className="text">Alzheimer</p>
                </div>
              </div>

              <div className="col-md-3 col-6">
                <div
                  className="single-analysis-counter mt-30 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.9s"
                >
                  <span className="count">
                    <span className="counter">1.4</span>
                    <span className="plus">%</span>
                  </span>
                  <p className="text">dementias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial" class="testimonial-area pt-70">
        <div class="container">
          <div class="header-hero-content text-center">
            <h2
              class="wow fadeInUp moto"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              Eliminate the tears and the stress your child with SLD experiences{" "}
              <br />
              when reading or learning with{" "}
              <span>
                NeuroTrain
                <span />
              </span>
            </h2>
            <br></br>
            <br></br>
            <p
              class="wow fadeInUp moto-text"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              NeuroTrain team believe in tech for good and want technology to be
              a part of special needs education industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
