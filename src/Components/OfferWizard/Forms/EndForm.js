import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";


const EndForm = ({ number }) => {
  
  return (
    <div className="outer-box">
      {/* Login Form */}
      <div className="login-form default-form">
        <div className="form-inner">
          {/* <h3>Login to Superio</h3> */}
          {/* Login Form */}
          <div className="column ">
            <div className="d-flex align-items-center justify-content-between my-4">
              <h1 className="fs-3 fw-700">Finalize</h1>
              <span className="text-success fw-700 ">
                Preview Project <AiFillEye />
              </span>
            </div>
            <div className="hr pt-4 ">
              <h2 className="fs-5">maximin number of simultaneous project </h2>
              <p>
                Howmaney project you can handel at one stile delivery great
                results
              </p>
              <div className="d-flex">
                <div className="col-2 form-group ">
                  <input
                    type="number"
                    name="message"
                    placeholder="Write Review"
                    className="overflow-auto"
                  ></input>
                </div>
              </div>
            </div>
            <div className="hr pt-4 mt-5">
              <h2 className="fs-3">Copyright Notice</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eos,
                sit debitis porro ipsum voluptatibus assumenda non enim? Libero
                laborum ratione tenetur consequatur tempore adipisci ipsa sunt
                quos, voluptas itaque!
              </p>
              <div className="d-flex w-100 ">
                <div className="resume-outer theme-blue w-100">
                  <h2 className="fs-3">Termers of serves </h2>
                  <div className="d-flex  gap-2">
                    <input type="checkbox" className="mt-2" />
                    <label htmlFor="q">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni incidunt necessitatibus vel sequi! Odit quidem
                      impedit, laudantium perferendis eum placeat nihil ipsa?
                      Cum praesentium ut delectus deleniti sapiente eos
                      molestias.
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex w-100 ">
                <div className="resume-outer theme-blue w-100">
                  <h2 className="fs-3">Privacy Notice</h2>
                  <div className="d-flex  gap-2">
                    <input type="checkbox" className="mt-2" />
                    <label htmlFor="q">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni incidunt necessitatibus vel sequi! Odit quidem
                      impedit, laudantium perferendis eum placeat nihil ipsa?
                      Cum praesentium ut delectus deleniti sapiente eos
                      molestias.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndForm;
