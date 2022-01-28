import React from "react";
import { NavLink } from "react-router-dom";

function Modal({ MTitle }) {
  return (
    <div className="row">
      <div
        className="modal fade col"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content p-3">
            <div className="login-form default-form">
              <div className="login-form default-form">
                <div className="form-inner">
                  <h3>Login to Superio</h3>
                  {/* <!--Login Form--> */}
                  <form method="post" action="add-parcel.html">
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required=""
                      />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input
                        id="password-field"
                        type="password"
                        name="password"
                        value=""
                        placeholder="Password"
                      />
                    </div>

                    <div className="form-group">
                      <div className="field-outer">
                        <div className="input-group checkboxes square">
                          <input
                            type="checkbox"
                            name="remember-me"
                            value=""
                            id="remember"
                          />
                          <label for="remember" className="remember">
                            <span className="custom-checkbox"></span> Remember
                            me
                          </label>
                        </div>
                        <a href="#" className="pwd">
                          Forgot password?
                        </a>
                      </div>
                    </div>

                    <div className="form-group">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        name="log-in"
                      >
                        Log In
                      </button>
                    </div>
                  </form>

                  <div className="bottom-box">
                    <div className="text"  data-bs-dismiss="modal" aria-label="Close">
                      Don't have an account? <NavLink to="/signup">Signup</NavLink>
                    </div>
                    <div className="divider">
                      <span>or</span>
                    </div>
                    <div className="btn-box row">
                      <div className="col-lg-6 col-md-12">
                        <a
                          href="#"
                          className="theme-btn social-btn-two facebook-btn"
                        >
                          <i className="fab fa-facebook-f"></i> Log In via
                          Facebook
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <a
                          href="#"
                          className="theme-btn social-btn-two google-btn"
                        >
                          <i className="fab fa-google"></i> Log In via Gmail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const LoginPopup = ({ title, MTitle }) => {
  return (
    <>
      <Modal MTitle={MTitle} />
      <button
        type="button"
        className="theme-btn social-btn-two facebook-btn w-auto"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {title}
      </button>
    </>
  );
};

export default LoginPopup;
