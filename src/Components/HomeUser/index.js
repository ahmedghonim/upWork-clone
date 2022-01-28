import React from "react";
import imageS from "../../images/resource/company-logo/2-5.png";
import ProfileSetting from '../ProfileSetting'
import Profile from '../Profile'
import OfferWizard from "../OfferWizard";
function HomeUser() {
  return (
    <div className="row m-2 ">
      {/* <!-- Sidebar Backdrop --> */}

      {/* <!-- User Sidebar --> */}
      <div className="col-2 shadow-sm h-100 ">
        <div className="sidebar-inner  d-flex">
          <div className="mb-3"></div>
          <ul className="ps-0 pt-3 d-flex flex-column w-100">
            <li className="content d-flex align-items-center mb-3">
              <span className="company-logo border rounded-circle border-1">
                <img
                  className=" border rounded-circle border-1"
                  src={imageS}
                  alt=""
                  style={{width:"40px"}}
                />
              </span>
              <span className="ms-2 fs-6">Name</span>
            </li>

            <li className="mb-3">
              <button type="button" className=" w-100 theme-btn btn-style-three small">
                Dashboard
              </button>
            </li>
            <li className="mb-3">
              <button type="button" className="w-100 theme-btn btn-style-three small">
                Profile
              </button>
            </li>
            <li className="mb-3">
              <button type="button" className="w-100 theme-btn btn-style-three small">
                Settings
              </button>
            </li>
            <li className="mb-3">
              <button type="button" className="w-100 theme-btn btn-style-three small">
                portfolio
              </button>
            </li>
            <li className="mb-3">
              <button type="button" className="w-100 theme-btn btn-style-three small">
                Offer Management
              </button>
            </li>
            <li className="mb-3">
              <button type="button" className="w-100 theme-btn btn-style-three small">
                Add New offer
              </button>
            </li>
            <li className="mb-3">
              <button type="button" className="w-100 theme-btn btn-style-three small">
                Add New Job
              </button>
            </li>
            <li className="mb-3">
              <button type="button" className="w-100 theme-btn btn-style-three small">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- End User Sidebar --> */}

      {/* <!-- Dashboard --> */}
      <section className="col-10">
        <div className="dashboard-outer">
        {/* <OfferWizard/> */}
        <ProfileSetting/>
        </div>
      </section>
      {/* <!-- End Dashboard --> */}
    </div>
  );
}

export default HomeUser;
