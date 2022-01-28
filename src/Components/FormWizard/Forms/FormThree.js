import React from "react";

const FormOne = ({ number }) => {
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
            <h3>Login to Superio</h3>
            {/* Login Form */}
            <form method="post" action="add-parcel.html">
              <div class="form-group  ">
                <div>
                  <label>range budgets</label>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                  </select>
                </div>
                <div></div>
              </div>

              <div class="form-group">
                <input name="message" type="text" value="chose file" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOne;
