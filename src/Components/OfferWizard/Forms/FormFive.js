import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";
import { MdAddCircle, MdModeEditOutline } from "react-icons/md";

const FormFive = ({ number }) => {
  const [addWork, setAddWork] = useState(0);
  return (
    <div className="outer-box">
      {/* Login Form */}
      <div className="login-form default-form">
        <div className="form-inner">
          {/* <h3>Login to Superio</h3> */}
          {/* Login Form */}
          <div className="column ">
            <div className="d-flex align-items-center justify-content-between my-4">
              <h1 className="fs-3 fw-700">Project Desorption</h1>
              <span className="text-success fw-700 ">
                Preview Project <AiFillEye />
              </span>
            </div>
            <div className="hr pt-4 ">
              <h2 className="fs-3">Project Summary</h2>
              <p>Beefily explain what sets you and your project apart</p>
              <div className="d-flex">
                <div className="col-lg-12 col-md-12 col-sm-12 form-group ">
                  <textarea
                    name="message"
                    placeholder="Write Review"
                    className="overflow-auto"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="hr pt-4 mt-5">
              <h2 className="fs-3">Project Steps</h2>
              <p>List the steps involved in delivering your project</p>
              <div className="d-flex w-100 ">
                <div className="resume-outer theme-blue w-100">
                  <div className="upper-title w-100 d-flex  justify-content-end">
                    <button className="text-success fw-700">
                      Add Step <MdAddCircle className="fs-5 m-2" />
                    </button>
                  </div>
                  {/* <!-- Resume BLock --> */}
                  <div className="resume-block">
                    <div className="inner m-0 px-5 ">
                      <div className="d-flex align-items-center">
                        <span className="name">1</span>
                        <div className="">
                          <div className="">
                            <p className="m-0 p-0 ">Product Designer</p>
                          </div>
                        </div>
                      </div>
                      <div className="m-5 ">
                        <div className=" col-lg-12 col-md-12 col-sm-12 form-group ">
                          <input
                            type="text"
                            name="message"
                            placeholder="Write Question"
                            className="overflow-auto"
                          ></input>
                          <textarea
                            name="message"
                            placeholder="Write Question"
                            className="overflow-auto mt-3"
                          ></textarea>
                        </div>
                        <div className="d-flex justify-content-end gap-3">
                          <button
                            type="button"
                            class="theme-btn btn-style-three small w-auto"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            class="theme-btn btn-style-one small w-auto"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resume-block">
                    <div className="inner m-0 px-5 d-flex align-items-center">
                      <span className="name">2</span>
                      <div className="">
                        <div className="">
                          <p className="m-0 p-0 ">Product Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resume-block">
                    <div className="inner m-0 px-5 d-flex align-items-center">
                      <span className="name">3</span>
                      <div className="">
                        <div className="">
                          <p className="m-0 p-0 ">Product Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hr pt-4 ">
              <div className="d-flex align-items-center justify-content-between my-4">
                <h2 className="fs-3">Frequently Questions </h2>
                <span className="text-success fw-700 ">
                  Add a Question <MdAddCircle className="fs-5 m-2" />
                </span>
              </div>
              <p>Beefily explain what sets you and your project apart</p>
              <div>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit??
                </h4>
                <p className="fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  atque culpa aut, minus quo explicabo similique repellendus
                  blanditiis? Culpa enim commodi corrupti harum dolorem earum
                  voluptas eaque sint, suscipit voluptatum.
                </p>
              </div>
              <div className="d-flex">
                <div className="col-lg-12 col-md-12 col-sm-12 form-group ">
                  <input
                    type="text"
                    name="message"
                    placeholder="Write Question"
                    className="overflow-auto my-3"
                  ></input>
                  <textarea
                    name="message"
                    placeholder="Write Question"
                    className="overflow-auto"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFive;
