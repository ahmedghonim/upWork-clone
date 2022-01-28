import React from "react";
import avatar from "../../images/resource/candidate-4.png";
import background from "../../images/background/3.png";
import { Tab, Tabs } from "react-bootstrap";
import BasicModal from "../BasicModal";
import { RiStarSFill } from "react-icons/ri";
import Card from "../Card";
function Profile() {
  return (
    <section className="candidate-detail-section style-three">
      {/* <!-- Upper Box --> */}
      <div
        className="upper-box "
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="auto-container ">
          {/* <!-- Candidate block Six --> */}
          <div className="candidate-block-six ">
            <div className="inner-box">
              <figure className="image">
                <img src={avatar} alt="" />
              </figure>
              <h4 className="name">
                <a href="#">Darlene Robertson</a>
              </h4>
              <span className="designation">UI Designer at Invision</span>
              <div className="content">
                <ul className="post-tags">
                  <li>
                    <a href="#">App</a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Digital</a>
                  </li>
                </ul>

                <ul className="candidate-info">
                  <li>
                    <span className="icon flaticon-map-locator"></span> London,
                    UK
                  </li>
                  <li>
                    <span className="icon flaticon-clock"></span> Member
                    Since,Aug 19, 2020
                  </li>
                </ul>

                <div className="btn-box">
                  <a href="#" className="theme-btn btn-style-one">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="candidate-detail-outer">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-8 col-md-12 col-sm-12 order-2">
              <div className="ls-widget p-3">
                <Tabs
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Portfolio">
                    <div className="row">
                      <div className="job-block-four  col-md-6 col-sm-12">
                        <Card/>
                      </div>
                      <div className="job-block-four  col-md-6 col-sm-12">
                        <Card/>
                      </div>
                      <div className="job-block-four  col-md-6 col-sm-12">
                        <Card/>
                      </div>
                      <div className="job-block-four  col-md-6 col-sm-12">
                        <Card/>
                      </div>
                      <div className="job-block-four  col-md-6 col-sm-12">
                        <Card/>
                      </div>
                     
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Offers">
                  <div className="job-block-four  col-md-6 col-sm-12">
                        <Card/>
                      </div>
                  </Tab>
                </Tabs>
              </div>
              <div className="ls-widget p-3">
                <Tabs id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="home" title="Home">
                    <div className="row">
                      <div className="job-block-four col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <span className="company-logo">
                            <img src={avatar} />
                          </span>

                          <h4>
                            <a href="#">Software Engineer</a>
                          </h4>
                          <div className="location">
                            <span className="icon flaticon-map-locator"></span>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="job-block-four col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <span className="company-logo">
                            <img src={avatar} />
                          </span>

                          <h4>
                            <a href="#">Software Engineer</a>
                          </h4>
                          <div className="location">
                            <span className="icon flaticon-map-locator"></span>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="job-block-four col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <span className="company-logo">
                            <img src={avatar} />
                          </span>

                          <h4>
                            <a href="#">Software Engineer</a>
                          </h4>
                          <div className="location">
                            <span className="icon flaticon-map-locator"></span>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="job-block-four col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <span className="company-logo">
                            <img src={avatar} />
                          </span>

                          <h4>
                            <a href="#">Software Engineer</a>
                          </h4>
                          <div className="location">
                            <span className="icon flaticon-map-locator"></span>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="job-block-four col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <span className="company-logo">
                            <img src={avatar} />
                          </span>

                          <h4>
                            <a href="#">Software Engineer</a>
                          </h4>
                          <div className="location">
                            <span className="icon flaticon-map-locator"></span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Profile">
                    <div className="row">
                      <div className="job-block-four col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <span className="company-logo">
                            <img src={avatar} />
                          </span>

                          <h4>
                            <a href="#">Software Engineer</a>
                          </h4>
                          <div className="location">
                            <span className="icon flaticon-map-locator"></span>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="job-block-four col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <span className="company-logo">
                            <img src={avatar} />
                          </span>

                          <h4>
                            <a href="#">Software Engineer</a>
                          </h4>
                          <div className="location">
                            <span className="icon flaticon-map-locator"></span>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="job-block-four col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <span className="company-logo">
                            <img src={avatar} />
                          </span>

                          <h4>
                            <a href="#">Software Engineer</a>
                          </h4>
                          <div className="location">
                            <span className="icon flaticon-map-locator"></span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>

            <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
              <div className="sidebar">
                <div className="sidebar-widget">
                  <div className="widget-content">
                    <div className="job-detail">
                      <h4>Candidates About</h4>
                      <p>
                        Hello my name is Nicole Wells and web developer from
                        Portland. In pharetra orci dignissim, blandit mi semper,
                        ultricies diam. Suspendisse malesuada suscipit nunc non
                        volutpat. Sed porta nulla id orci laoreet tempor non
                        consequat enim. Sed vitae aliquam velit. Aliquam ante
                        erat, blandit at pretium et, accumsan ac est. Integer
                        vehicula rhoncus molestie. Morbi ornare ipsum sed sem
                        condimentum, et pulvinar tortor luctus. Suspendisse
                        condimentum lorem ut elementum aliquam.
                      </p>
                      <BasicModal title="More ..." />

                      <div>
                        <span className="d-flex align-items-center ">
                          <RiStarSFill className="fs-5 text-orange" />
                          <RiStarSFill className="fs-5 text-orange" />
                          <RiStarSFill className="fs-5 text-orange" />
                          <RiStarSFill className="fs-5 text-orange" />
                         (4.5)
                          <span className="mx-2">(2K)</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-widget">
                  {/* <!-- Job Skills --> */}
                  <h4 className="widget-title">Professional Skills</h4>
                  <div className="widget-content">
                    <ul className="job-skills">
                      <li>
                        <a href="#">app</a>
                      </li>
                      <li>
                        <a href="#">administrative</a>
                      </li>
                      <li>
                        <a href="#">android</a>
                      </li>
                      <li>
                        <a href="#">wordpress</a>
                      </li>
                      <li>
                        <a href="#">design</a>
                      </li>
                      <li>
                        <a href="#">react</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-widget contact-widget">
                  <h4 className="widget-title">Contact </h4>
                  <div className="widget-content">
                    {/* <!-- Comment Form --> */}
                    <div className="default-form">
                      {/* <!--Comment Form--> */}
                      <form>
                        <div className="row clearfix">
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input
                              type="text"
                              name="username"
                              placeholder="Your Name"
                              required=""
                            />
                          </div>

                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <textarea
                              className="darma"
                              name="message"
                              placeholder="Message"
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <button
                              className="theme-btn btn-style-one"
                              type="submit"
                              name="submit-form"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
