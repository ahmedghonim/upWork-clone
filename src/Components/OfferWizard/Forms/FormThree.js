import React, { useContext, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { APIContext } from "../Context";

const FormThree = ({ number }) => {
  const {
    specializationDB,
    categoryDB,
    handleTextFormChange,
    offerWizardFormData,
    handleRadioFormChange,
  } = useContext(APIContext);
  const { data } = categoryDB;
  // console.log(projectItems);
  console.log(offerWizardFormData);
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
                        onClick={(e) =>
                          handleRadioFormChange(
                            e.target.checked ? 1 : 0,
                            "isMultiPackages"
                          )
                        }
                        defaultChecked={offerWizardFormData["isMultiPackages"]}
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
                            {offerWizardFormData["isMultiPackages"] && (
                              <th className="text-center p-3 fs-5">Stander</th>
                            )}
                            {offerWizardFormData["isMultiPackages"] && (
                              <th className="text-center p-3 fs-5">Advanced</th>
                            )}
                          </tr>
                          {categoryDB.data[
                            offerWizardFormData.category
                          ]?.projectItems.map(({ projectItemId, nameEn }) => (
                            <tr key={projectItemId}>
                              <td width="200px" className=" p-2">
                                {nameEn}
                              </td>
                              <td width="200px" className=" text-center p-2">
                                <input
                                  onChange={() =>
                                    handleTextFormChange(
                                      projectItemId,
                                      "offerCategoryItems"
                                    )
                                  }
                                  type="text"
                                />
                              </td>
                              {offerWizardFormData["isMultiPackages"] && (
                                <td width="200px" className=" text-center p-2">
                                  <input type="text" />
                                </td>
                              )}
                              {offerWizardFormData["isMultiPackages"] && (
                                <td width="200px" className=" text-center p-2">
                                  <input type="text" />
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
                          {categoryDB.data[
                            offerWizardFormData.category
                          ]?.projectServices.map(
                            ({ projectServiceId, nameEn }) => (
                              <tr key={projectServiceId}>
                                <td width="200px" className=" p-2">
                                  {nameEn}
                                </td>
                                <td width="200px" className=" text-center p-2">
                                  <input type="checkbox" />
                                </td>
                                {offerWizardFormData["isMultiPackages"] && (
                                  <td
                                    width="200px"
                                    className=" text-center p-2"
                                  >
                                    <input type="checkbox" />
                                  </td>
                                )}
                                {offerWizardFormData["isMultiPackages"] && (
                                  <td
                                    width="200px"
                                    className=" text-center p-2"
                                  >
                                    <input type="checkbox" />
                                  </td>
                                )}
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="form-group ">
                    <div className="table-outer">
                      <table className="default-table">
                        <tbody>
                          <tr>
                            <td width="200px">Project Price</td>
                            <td width="200px" className="p-2">
                              <input
                                type="text"
                                name="radio"
                                id="radio-1"
                                defaultChecked=""
                              />
                            </td>
                            {offerWizardFormData["isMultiPackages"] && (
                              <td width="200px" className="p-2">
                                <input
                                  type="text"
                                  name="radio"
                                  id="radio-1"
                                  defaultChecked=""
                                />
                              </td>
                            )}
                            {offerWizardFormData["isMultiPackages"] && (
                              <td width="200px" className="p-2">
                                <input
                                  type="text"
                                  name="radio"
                                  id="radio-1"
                                  defaultChecked=""
                                />
                              </td>
                            )}
                          </tr>
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
                          {categoryDB.data[
                            offerWizardFormData.category
                          ]?.projectItems.map(({ projectItemId, nameEn }) => (
                            <tr key={projectItemId}>
                              <td width="200px" className=" p-2">
                                {nameEn}
                              </td>
                              <td width="200px" className=" text-center p-2">
                                <input type="text" />
                              </td>
                            </tr>
                          ))}
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
                                colSpan="2"
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
                                colSpan="2"
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
