import React from "react";

const FormTow = ({ number }) => {
  return (
    <div className="login-section pt-5">
      <div
        className="image-layer"
        style={{
          backgroundImage:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fjnu-esamhp.org%2Fthis-makes-your-meetings-shorter-and-more-efficient.html&psig=AOvVaw1WVjWS9GbCJn79JdsYXBZC&ust=1643226191357000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMiN4uTUzfUCFQAAAAAdAAAAABAP",
        }}
      ></div>
      <div className="outer-box">
        {/* Login Form */}
        <div className="login-form default-form">
          <div className="form-inner">
            <h3>General Information</h3>
            {/* Login Form */}
            <form method="post" action="add-parcel.html">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="username"
                  placeholder="First Name"
                  required=""
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="Password"
                  name="username"
                  placeholder="Last Name"
                  required=""
                />
              </div>
            </form>
          </div>
        </div>
        {/* End Login Form */}
      </div>
    </div>
  );
};

export default FormTow;
