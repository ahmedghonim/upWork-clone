import React from "react";

function Profile() {
  return (
    <div className="dashboard-outer">
      <div className="upper-title-box">
        <h3>My Profile</h3>
        <div className="text">Ready to jump back in?</div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <div className="tabs-box">
              <div className="widget-title">
                <h4>My Profile</h4>
              </div>

              <div className="widget-content">
                <div className="uploading-outer">
                  <div className="uploadButton">
                    <input
                      className="uploadButton-input"
                      type="file"
                      name="attachments[]"
                      accept="image/*, application/pdf"
                      id="upload"
                      multiple=""
                    />
                    <label
                      className="uploadButton-button ripple-effect"
                      htmlFor="upload"
                    >
                      Browse Logo
                    </label>
                    <span className="uploadButton-file-name"></span>
                  </div>
                  <div className="text">
                    Max file size is 1MB, Minimum dimension: 330x300 And
                    Suitable files are .jpg &amp; .png
                  </div>
                </div>

                <form className="default-form">
                  <div className="row">
                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Full Name</label>
                      <input type="text" name="name" placeholder="Jerome" />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Job Title</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="UI Designer"
                      />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Phone</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="0 123 456 7890"
                      />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Email address</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="creativelayers"
                      />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Website</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="www.jerome.com"
                      />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-3 col-md-12">
                      <label>Current Salary($)</label>
                      <select className="chosen-select" style={{ display: "none" }}>
                        <option>40-70 K</option>
                        <option>50-80 K</option>
                        <option>60-90 K</option>
                        <option>70-100 K</option>
                        <option>100-150 K</option>
                      </select>
                      <div
                        className="chosen-container chosen-container-single chosen-container-single-nosearch"
                        style={{ width: "100%" }}
                        title=""
                      >
                        <a className="chosen-single">
                          <span>40-70 K</span>
                          <div>
                            <b></b>
                          </div>
                        </a>
                        <div className="chosen-drop">
                          <div className="chosen-search">
                            <input type="text" autocomplete="off" readonly="" />
                          </div>
                          <ul className="chosen-results"></ul>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-3 col-md-12">
                      <label>Expected Salary($)</label>
                      <select className="chosen-select" style={{ display: "none" }}>
                        <option>120-350 K</option>
                        <option>40-70 K</option>
                        <option>50-80 K</option>
                        <option>60-90 K</option>
                        <option>70-100 K</option>
                        <option>100-150 K</option>
                      </select>
                      <div
                        className="chosen-container chosen-container-single chosen-container-single-nosearch"
                        style={{ width: "100%" }}
                        title=""
                      >
                        <a className="chosen-single">
                          <span>120-350 K</span>
                          <div>
                            <b></b>
                          </div>
                        </a>
                        <div className="chosen-drop">
                          <div className="chosen-search">
                            <input type="text" autocomplete="off" readonly="" />
                          </div>
                          <ul className="chosen-results"></ul>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Experience</label>
                      <input type="text" name="name" placeholder="5-10 Years" />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Age</label>
                      <select className="chosen-select" style={{ display: "none" }}>
                        <option>23 - 27 Years</option>
                        <option>24 - 28 Years</option>
                        <option>25 - 29 Years</option>
                        <option>26 - 30 Years</option>
                      </select>
                      <div
                        className="chosen-container chosen-container-single chosen-container-single-nosearch"
                        style={{width: "100%"}}
                        title=""
                      >
                        <a className="chosen-single">
                          <span>23 - 27 Years</span>
                          <div>
                            <b></b>
                          </div>
                        </a>
                        <div className="chosen-drop">
                          <div className="chosen-search">
                            <input type="text" autocomplete="off" readonly="" />
                          </div>
                          <ul className="chosen-results"></ul>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Education Levels</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Certificate"
                      />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Languages</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="English, Turkish"
                      />
                    </div>

                    {/* <!-- Search Select --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Categories </label>
                      <select
                        data-placeholder="Categories"
                        className="chosen-select multiple"
                        multiple=""
                        tabindex="-1"
                        style={{ display: "none" }}
                      >
                        <option value="Banking">Banking</option>
                        <option value="Digital&amp;Creative">
                          Digital &amp; Creative
                        </option>
                        <option value="Retail">Retail</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Management">Management</option>
                      </select>
                      <div
                        className="chosen-container chosen-container-multi"
                        style={{ width: "100%" }}
                        title=""
                      >
                        <ul className="chosen-choices">
                          <li className="search-field">
                            <input
                              type="text"
                              value="Categories"
                              className="default"
                              autocomplete="off"
                              style={{ width: "97.5469px" }}
                              tabindex="4"
                            />
                          </li>
                        </ul>
                        <div className="chosen-drop">
                          <ul className="chosen-results"></ul>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Allow In Search &amp; Listing</label>
                      <select className="chosen-select" style={{ display: "none" }}>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                      <div
                        className="chosen-container chosen-container-single chosen-container-single-nosearch"
                        style={{ width: "100%" }}
                        title=""
                      >
                        <a className="chosen-single">
                          <span>Yes</span>
                          <div>
                            <b></b>
                          </div>
                        </a>
                        <div className="chosen-drop">
                          <div className="chosen-search">
                            <input type="text" autocomplete="off" readonly="" />
                          </div>
                          <ul className="chosen-results"></ul>
                        </div>
                      </div>
                    </div>

                    {/* <!-- About Company --> */}
                    <div className="form-group col-lg-12 col-md-12">
                      <label>Description</label>
                      <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <button className="theme-btn btn-style-one">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <div className="tabs-box">
              <div className="widget-title">
                <h4>Social Network</h4>
              </div>

              <div className="widget-content">
                <form className="default-form">
                  <div className="row">
                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Facebook</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="www.facebook.com/Invision"
                      />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Twitter</label>
                      <input type="text" name="name" placeholder="" />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Linkedin</label>
                      <input type="text" name="name" placeholder="" />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Google Plus</label>
                      <input type="text" name="name" placeholder="" />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <button className="theme-btn btn-style-one">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <div className="tabs-box">
              <div className="widget-title">
                <h4>Contact Information</h4>
              </div>

              <div className="widget-content">
                <form className="default-form">
                  <div className="row">
                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Country</label>
                      <select className="chosen-select" style={{ display: "none" }}>
                        <option>Australia</option>
                        <option>Pakistan</option>
                        <option>Chaina</option>
                        <option>Japan</option>
                        <option>India</option>
                      </select>
                      <div
                        className="chosen-container chosen-container-single chosen-container-single-nosearch"
                        style={{width: "100%"}}
                        title=""
                      >
                        <a className="chosen-single">
                          <span>Australia</span>
                          <div>
                            <b></b>
                          </div>
                        </a>
                        <div className="chosen-drop">
                          <div className="chosen-search">
                            <input type="text" autocomplete="off" readonly="" />
                          </div>
                          <ul className="chosen-results"></ul>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>City</label>
                      <select className="chosen-select" style={{ display: "none" }}>
                        <option>Melbourne</option>
                        <option>Pakistan</option>
                        <option>Chaina</option>
                        <option>Japan</option>
                        <option>India</option>
                      </select>
                      <div
                        className="chosen-container chosen-container-single chosen-container-single-nosearch"
                        style={{ width: "100%" }}
                        title=""
                      >
                        <a className="chosen-single">
                          <span>Melbourne</span>
                          <div>
                            <b></b>
                          </div>
                        </a>
                        <div className="chosen-drop">
                          <div className="chosen-search">
                            <input type="text" autocomplete="off" readonly="" />
                          </div>
                          <ul className="chosen-results"></ul>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-12 col-md-12">
                      <label>Complete Address</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
                      />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Find On Map</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
                      />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-3 col-md-12">
                      <label>Latitude</label>
                      <input type="text" name="name" placeholder="Melbourne" />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-3 col-md-12">
                      <label>Longitude</label>
                      <input type="text" name="name" placeholder="Melbourne" />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-12 col-md-12">
                      <button className="theme-btn btn-style-three">
                        Search Location
                      </button>
                    </div>

                    <div className="form-group col-lg-12 col-md-12"></div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-12 col-md-12">
                      <button className="theme-btn btn-style-one">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
