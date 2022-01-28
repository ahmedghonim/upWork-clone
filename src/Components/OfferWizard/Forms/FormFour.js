import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";
import {  MdModeEditOutline } from "react-icons/md";

const FormFour = ({ number }) => {
  const [threeTiers, setThreeTiers] = useState(false);
  const dbC = [
    { title: "delivery days", input_type: "checkbox" },
    { title: "Number of Revision", input_type: "radio" },
    { title: "Number of product", input_type: "radio" },
    { title: "Number of Pages", input_type: "radio" },
    { title: "Number of Plugins ", input_type: "text" },
    { title: "Number of Plugins ", input_type: "number" },
    { title: "Number of Plugins ", input_type: "number" },
    { title: "Number of Plugins ", input_type: "number" },
    { title: "Number of Plugins ", input_type: "number" },
    { title: "Number of Plugins ", input_type: "number" },
    { title: "Number of Plugins ", input_type: "number" },
    { title: "Number of Plugins ", input_type: "number" },
    { title: "Number of Plugins ", input_type: "number" },
    { title: "Number of Plugins ", input_type: "number" },
    { title: "Number of Plugins ", input_type: "number" },
    { title: "Number of Plugins ", input_type: "number" },
  ];
  const dbS = [
    { title: "data customize", input_type: "number" },
    { title: "Content Upload", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "radio" },
    { title: "Responsive Design", input_type: "radio" },
    { title: "Responsive Design", input_type: "radio" },
    { title: "Responsive Design", input_type: "radio" },
    { title: "Responsive Design", input_type: "radio" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "Responsive Design", input_type: "number" },
    { title: "eCommerce Functionality", input_type: "number" },
    { title: "Number of Plugins ", input_type: "number" },
  ];
  const dbP = [
    {
      title: "Prices",
      input_type: "number",
      value: [10, 20, 30],
    },
  ];
  return (
    <div className="outer-box">
      {/* Login Form */}
      <div className="login-form default-form">
        <div className="form-inner">
          {/* <h3>Login to Superio</h3> */}
          {/* Login Form */}
          <div className="column ">
            <div className="d-flex align-items-center justify-content-between my-4">
              <h1 className="fs-3 fw-700">Creat stunning Project gallery</h1>
              <span className="text-success fw-700 ">
                Preview Project <AiFillEye />
              </span>
            </div>
            <div className="hr pt-4 ">
              <h2 className="fs-3">Project Image</h2>
              <p>Upload up to 20 images (.jpg or jpg) up to 10MB</p>
              <div className="d-flex">
                {" "}
                <div className="file-edit-box">
                  <div className="edit-btns">
                    <button>
                      <MdModeEditOutline />
                    </button>
                    <button>
                      <IoTrashOutline />
                    </button>
                  </div>
                </div>
                <div className="uploadButton h-100">
                  <input
                    className="uploadButton-input"
                    type="file"
                    name="attachments[]"
                    accept="image/*, application/pdf"
                    id="upload"
                    multiple=""
                  />
                  <label
                    className="uploadButton-button ripple-effect fw-bold"
                    for="upload"
                  >
                    Drag Image here or <br/>
                    <span className="text-success ">Brows</span> 
                  </label>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2 fs-6 fw-bold text-info">
                <input type="radio" name="www" value="0"/>
                <label htmlFor="www">Items</label>
              </div>
            </div>
            <div className="hr pt-4 ">
              <h2 className="fs-3">Project Video</h2>
              <p>Upload up to 20 images (.jpg or jpg) up to 10MB</p>
              <div className="d-flex">
                {" "}
                <div className="file-edit-box">
                  <div className="edit-btns">
                    <button>
                      <MdModeEditOutline />
                    </button>
                    <button>
                      <IoTrashOutline />
                    </button>
                  </div>
                </div>
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
                    className="uploadButton-button ripple-effect fw-bold"
                    for="upload"
                  >
                    Drag Video here or <br/>
                    <span className="text-success ">Brows</span> 
                  </label>
                </div>
              </div>
             
            </div>
            <div className="hr pt-4 ">
              <h2 className="fs-3">Sample Document</h2>
              <p>Upload up to 20 images (.jpg or jpg) up to 10MB</p>
              <div className="d-flex">
                {" "}
                <div className="file-edit-box">
                  <div className="edit-btns">
                    <button>
                      <MdModeEditOutline />
                    </button>
                    <button>
                      <IoTrashOutline />
                    </button>
                  </div>
                </div>
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
                    className="uploadButton-button ripple-effect fw-bold"
                    for="upload"
                  >
                    Drag Video here or <br/>
                    <span className="text-success ">Brows</span> 
                  </label>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFour;
