import React from "react";
import avatar from "../../images/A.jpg";
function ProfileSetting() {
  return (
    <section className="user-dashboard">
      <div className="dashboard-outer">
        <div class="row">
          <div class="col-lg-12">
            {/* <!-- Ls widget --> */}
            <div class="ls-widget">
              <div class="tabs-box">
                <div class="widget-title">
                  <h4>Setting </h4>
                </div>

                <div class="widget-content">
                  <form class="default-form">
                    <div class="row">
                     
                      <div class="form-group col-lg-6 col-md-12">
                        <label>First Name </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Invisionn"
                        />
                      </div>
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Last Name </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Invisionn"
                        />
                      </div>
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Gender</label>
                        <select class="chosen-select">
                          <option>Female</option>
                          <option>Male</option>
                        </select>
                      </div>

                      {/* <!-- Input --> */}
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Phone</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="0 123 456 7890"
                        />
                      </div>
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Email</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="0 123 456 7890"
                        />
                      </div>
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Change Password</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="0 123 456 7890"
                        />
                      </div>
                      {/* <!-- Input --> */}
                      <div class="form-group col-lg-6 col-md-12">
                        <button class="theme-btn btn-style-one">Save</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSetting;
