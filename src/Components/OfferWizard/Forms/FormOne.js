import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { APIContext } from "../Context";

const FormOne = ({ number }) => {
  const {
    specializationDB,
    categoryDB,
    pluginTypeDB,
    wordpressPluginDB,
    offerWizardFormData,
    handleCheckboxFormChange,
    handleTextFormChange,
    handleRadioFormChange,
  } = useContext(APIContext);
  console.log(offerWizardFormData);
  return (
    <div className="outer-box">
      {/* Login Form */}
      <div className="login-form default-form">
        <div className="form-inner">
          <h3> Title & Categories</h3>
          {/* Login Form */}
          <form method="post">
            <div className="form-group">
              <label>Title</label>
              <input
                onChange={(e) => handleTextFormChange(e.target.value, "title")}
                value={offerWizardFormData.title}
                type="text"
                value={offerWizardFormData.title}
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <h6>specialization</h6>
              <div className="row">
                {specializationDB.data?.map(
                  ({ specializationId, nameEn, code }) => (
                    <div key={specializationId} className="col-md-4 col-sm-6">
                      <div className="input-group checkboxes square">
                        <input
                          onClick={() =>
                            handleCheckboxFormChange(
                              specializationId,
                              "offerSpecializations"
                            )
                          }
                          name={specializationId}
                          id={specializationId}
                          defaultChecked={offerWizardFormData[
                            "offerSpecializations"
                          ].includes(specializationId)}
                          type="checkbox"
                        />
                        <label htmlFor={specializationId}>{nameEn}</label>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <h6>Category</h6>
            <div className="form-group d-flex gap-4 flex-wrap">
              {categoryDB.data?.map(({ categoryId, code, nameEn }) => (
                <div key={categoryId}>
                  <input
                    onClick={() =>
                      handleRadioFormChange(categoryId, "category")
                    }
                    type="radio"
                    name="category"
                    id={nameEn}
                    defaultChecked={offerWizardFormData["category"] == categoryId}
                  />
                  <label htmlFor={nameEn} className="me-2">{nameEn}</label>
                </div>
              ))}
            </div>
            <div className="form-group">
              <h3>Plugins & Skills</h3>
              {/* Login Form */}
              <form method="post" action="add-parcel.html">
                <div className="form-group">
                  <label>Plugin Type </label>
                  <div className="row">
                    {pluginTypeDB.data?.map(({ pluginTypeId, nameEn }) => (
                      <div key={pluginTypeId} className="col-md-4 col-sm-6">
                        <div className="input-group checkboxes square">
                          <input
                            onClick={() =>
                              handleCheckboxFormChange(
                                pluginTypeId,
                                "offerPluginTypes"
                              )
                            }
                            id={nameEn}
                            defaultChecked={offerWizardFormData[
                              "offerPluginTypes"
                            ].includes(pluginTypeId)}
                            type="checkbox"
                          />
                          <label htmlFor={nameEn} className="remember">
                            <span className="custom-checkbox"></span> {nameEn}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label>WordPress plugins</label>
                  <div className="row">
                    {wordpressPluginDB.data?.map(
                      ({ wordpressPluginId, nameEn }) => (
                        <div
                          key={wordpressPluginId}
                          className="col-md-4 col-sm-6"
                        >
                          <div className="input-group checkboxes square">
                            <input
                              onClick={() =>
                                handleCheckboxFormChange(
                                  wordpressPluginId,
                                  "offerWordpressPlugins"
                                )
                              }
                              id={nameEn}
                              defaultChecked={offerWizardFormData[
                                "offerWordpressPlugins"
                              ].includes(wordpressPluginId)}
                              type="checkbox"
                            />
                            <label htmlFor={nameEn} className="remember">
                              <span className="custom-checkbox"></span> {nameEn}
                            </label>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label className="me-2">Search Tags </label>
                  <input
                    onChange={(e) =>
                      handleTextFormChange(e.target.value, "offerSearchTags")
                    }
                    value={offerWizardFormData.offerSearchTags}
                    type="text"
                    value={offerWizardFormData.offerSearchTags}
                    placeholder="Title"
                  />
                </div>
              </form>
            </div>
          </form>
        </div>
      </div>
      {/* End Login Form */}
    </div>
  );
};

export default FormOne;
