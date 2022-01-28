import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";

const FormThree = ({ number }) => {
  const [threeTiers, setThreeTiers] = useState(false);
  const dbC = [
    { title: "delivery days", input_type: "checkbox" },
    { title: "Number of Revision", input_type: "radio" },
    { title: "Number of product", input_type: "radio" },
    { title: "Number of Pages", input_type: "radio" }
  ];
  const dbS = [
    { title: "data customize", input_type: "number" },
    { title: "Content Upload", input_type: "number" },

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
          <div className="column">
            <form className="default-form ">
              {/* <!-- Input --> */}
              <div className="form-group row ">
                <div className="switchbox-outer margin-top-10 d-flex justify-content-between pt-5 px-5 align-items-center">
                  <div className="d-flex flex-column">
                    <span className="fs-4 fw-700 d-block">
                      Creat Pricing tiers
                    </span>
                    <span>customize your project withe 11 or 3 prices</span>
                  </div>

                  <div className="switchbox">
                    <label className="switch">
                      <input
                        type="checkbox"
                        onChange={() => setThreeTiers(!threeTiers)}
                      />
                      <span className="slider round"></span>
                      <span className="title">3 Tiers</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* <!-- Textarea --> */}
              <div className="form-group">
                <div className="row">
                  {/* first table */}
                  <div className="form-group ">
                    <div className="table-outer">
                      <table className="default-table">
                        <tbody>
                          <tr>
                            <th></th>
                            <th className="text-center p-3 fs-5"> Starter </th>
                            {threeTiers && (
                              <th className="text-center p-3 fs-5">Stander</th>
                            )}
                            {threeTiers && (
                              <th className="text-center p-3 fs-5">Advanced</th>
                            )}
                          </tr>
                          {dbC.map(({ title, input_type }) => (
                            <tr>
                              <td width="200px" className=" p-2">
                                {title}
                              </td>
                              <td width="200px" className=" text-center p-2">
                                <input
                                  type={input_type}
                                  name={title}
                                  id="radio-1"
                                />
                              </td>
                              {threeTiers && (
                                <td width="200px" className=" text-center p-2">
                                  <input
                                    type={input_type}
                                    name={title}
                                    id="radio-1"
                                  />
                                </td>
                              )}
                              {threeTiers && (
                                <td width="200px" className=" text-center p-2">
                                  <input
                                    type={`${input_type}`}
                                    name={title}
                                    id="radio-1"
                                  />
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* seconde table  */}
                  <div className="form-group ">
                    <div className="table-outer">
                      <table className="default-table">
                        <tbody>
                          {dbS.map(({ title }) => (
                            <tr>
                              <td width="200px">{title}</td>
                              <td width="200px" className="text-center">
                                <input
                                  id="check-a"
                                  type="checkbox"
                                  name="check"
                                />
                              </td>
                              {threeTiers && (
                                <td width="200px" className="text-center">
                                  <input
                                    id="check-a"
                                    type="checkbox"
                                    name="check"
                                  />
                                </td>
                              )}
                              {threeTiers && (
                                <td width="200px" className="text-center">
                                  <input
                                    id="check-a"
                                    type="checkbox"
                                    name="check"
                                  />
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="form-group ">
                    <div className="table-outer">
                      <table className="default-table">
                        <tbody>
                          {dbP.map(({ value }) => (
                            <tr>
                              <td width="200px">Project Price</td>
                              <td width="200px" className="p-2">
                                <input
                                  type="text"
                                  name="radio"
                                  id="radio-1"
                                  checked=""
                                  defaultValue={value[0]}
                                />
                              </td>
                              {threeTiers && (
                                <td width="200px" className="p-2">
                                  <input
                                    type="text"
                                    name="radio"
                                    id="radio-1"
                                    checked=""
                                    defaultValue={value[1]}
                                  />
                                </td>
                              )}
                              {threeTiers && (
                                <td width="200px" className="p-2">
                                  <input
                                    type="text"
                                    name="radio"
                                    id="radio-1"
                                    checked=""
                                    defaultValue={value[2]}
                                  />
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <span className="fs-4 fw-700 mb-3">Chose add-on</span>
                  <div className=" hr"></div>
                  <div className="form-group mt-5">
                    <div className="table-outer">
                      <div className="input-group d-flex align-items-center">
                        <input type="checkbox" />
                        <label for="remember" className="ms-1 fs-6 fw-700 ">
                          <span className="custom-checkbox"></span>
                          Fast Delivery
                        </label>
                      </div>
                      <table className="default-table">
                        <tbody>
                          <tr>
                            <th></th>
                            <th className="text-center p-3 fs-5"> Standard </th>
                          </tr>

                          <tr>
                            <td width="200px" className=" p-2">
                              Delivery Days
                            </td>
                            <td width="200px" className=" text-center p-2">
                              <input type="text" id="radio-1" />
                            </td>
                          </tr>
                          <tr>
                            <td width="200px" className=" p-2">
                              For an extra
                            </td>
                            <td width="200px" className=" text-center p-2">
                              <input type="text" id="radio-1" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="form-group ">
                      <div className="table-outer">
                        <table className="default-table">
                          <tbody>
                            <tr>
                              <td width="200px" className=" p-2">
                                <div className="input-group d-flex align-items-center">
                                  <input type="checkbox" />
                                  <label
                                    for="remember"
                                    className="ms-1 fs-6 fw-700 "
                                  >
                                    <span className="custom-checkbox"></span>
                                    Addition Revision
                                  </label>
                                </div>
                              </td>
                              <td width="200px" className=" text-center p-2 ">
                                <span className="fs-5 fw-700">For extra</span>
                                <input type="text" />
                              </td>
                              <td width="200px" className=" text-center p-2 ">
                                <span className="fs-5 fw-700">
                                  Addition days
                                </span>{" "}
                                <input type="text" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="table-outer">
                        <div className="input-group d-flex align-items-center">
                          <input type="checkbox" />
                          <label for="remember" className="ms-1 fs-6 fw-700 ">
                            <span className="custom-checkbox"></span>
                            Custom add-on
                          </label>
                        </div>
                        <table className="default-table">
                          <tbody>
                            <tr>
                              <th></th>
                              <th className="text-center p-3 fs-5">
                                {" "}
                                Starter{" "}
                              </th>
                            </tr>

                            <tr>
                              <td width="200px" className=" p-2">
                                Title
                              </td>
                              <td
                                colspan="2"
                                width="200px"
                                className=" text-center p-2"
                              >
                                <input type="text" id="radio-1" />
                              </td>
                            </tr>
                            <tr>
                              <td width="200px" className=" p-2">
                                Description
                              </td>
                              <td
                                width="200px"
                                colspan="2"
                                className=" text-center p-2"
                              >
                                <textarea type="text" id="radio-1" />
                              </td>
                            </tr>
                            <tr>
                              <td width="200px" className=" p-2">
                                For an extra
                              </td>
                              <td width="200px" className=" text-center p-2">
                                <input type="text" id="radio-1" />
                              </td>
                              <td
                                width="200px"
                                className="d-flex text-center p-2 "
                              >
                                <span htmlFor="" className="w-100">
                                  Addition Days
                                </span>{" "}
                                <input type="text" id="radio-1" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="d-flex justify-content-between ">
                        <span className="btn text-success fw-700 pointer-event ">
                          Creat Custom add-on <MdAddCircle />
                        </span>
                        <span className="btn text-success fw-700 ">
                          Remove <IoTrashOutline />{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormThree;
