import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";
import { MdAddCircle, MdModeEditOutline } from "react-icons/md";

const FormSix = ({ number }) => {
  const [addRequirement, setAddRequirement] = useState(false);
  const [selectAnswer, setSelectAnswer] = useState();
  const [anotherChoice, setAnotherChoice] = useState();
  const [anotherChoices, setAnotherChoices] = useState([]);
  const [requirement, setRequirement] = useState({
    requirement: "",
    select_answer: "",
    answer: "",
    mandatory: false,
    more_answer: false,
    choices: [],
    attachment: [],
  });

  const [requirements, setRequirements] = useState([]);

  const handleRequirementChange = (e) => {
    const { name, value } = e.target;
    setRequirement((prevState) => ({
      ...prevState,
      choices: anotherChoices,
    }));
    setRequirement((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handelAnotherChoices = () => {
    setAnotherChoices((prev) => [...prev, anotherChoice]);
    setRequirement((prevState) => ({
      ...prevState,
      choices: anotherChoices,
    }));

    setAnotherChoice("");
  };
  
  console.log(anotherChoices, "beforr");

  const handleAddNewRequirement = () => {
    setRequirements((prev) => [...prev, requirement]);
    setAddRequirement(false);
    setRequirement({ requirement: "", select_answer: "" });
    setAnotherChoices([]);
  };

  const handleCancel = () => {
    setAddRequirement(false);
    setRequirement("");
  };

  return (
    <div className="outer-box">
      {/* Login Form */}
      <div className="login-form default-form">
        <div className="form-inner">
          {/* <h3>Login to Superio</h3> */}
          {/* Login Form */}
          <div className="column ">
            <div className="d-flex align-items-center justify-content-between my-4">
              <h1 className="fs-3 fw-700">Requirement for clint</h1>
            </div>
            <div className="hr pt-4 ">
              <div className="d-flex align-items-center justify-content-between">
                <h2 className="fs-3"> Tell the clint what you need to start</h2>
                <button
                  className="text-success fw-700 "
                  onClick={() => setAddRequirement(!addRequirement)}
                >
                  Add a Requirement <MdAddCircle className="fs-5 " />
                </button>
              </div>
              <span>
                after the clint purchase your project ,they will be required to
                answers requirements you define before the contract offer ails
                starts
              </span>
              <div className="my-5">
                {requirements.map(({ requirement, choices }, index) => {
                  return (
                    <>
                      <span key={index} className="fs-4 fw-bold">
                        {requirement}
                      </span>
                      {choices.map((choice) => {
                        return <p className="m-3 fw-700 fs-5">-{choice}</p>;
                      })}
                    </>
                  );
                })}
              </div>
              <div className="d-flex align-items-end form-group">
                <div
                  className={
                    addRequirement
                      ? "col-lg-12 col-md-12 col-sm-12  "
                      : "d-none"
                  }
                >
                  <textarea
                    name="requirement"
                    placeholder="Requirement for clint"
                    className="overflow-auto"
                    onChange={handleRequirementChange}
                    value={requirement.requirement}
                  ></textarea>

                  <div className=" d-flex justify-content-between align-items-end">
                    <div className="chosen-search col-4 mt-4">
                      <label htmlFor="r" className="fw-700 mb-2">
                        Answer
                      </label>
                      <select
                        value={requirement.select_answer}
                        name="select_answer"
                        onChange={handleRequirementChange}
                      >
                        <option value="free_text">Chose type of Answer </option>
                        <option value="free_text">Free Text</option>
                        <option value="multiple_choice">
                          Multiple Choices
                        </option>
                        <option value="file_attachment">File Attachment</option>
                      </select>
                    </div>
                    <div className=" mt-4 d-flex align-items-center">
                      <input
                        type="checkbox"
                        className=" mx-2"
                        name="mandatory"
                        onChange={(e) => {
                          setRequirement((prevState) => ({
                            ...prevState,
                            mandatory: e.target.checked,
                          }));
                        }}
                      />
                      <label htmlFor="select_answer">
                        Mandatory requirement
                      </label>
                    </div>
                  </div>
                  {/* if Multiple_choice */}
                  {requirement.select_answer == "multiple_choice" && (
                    <div className="form-group mt-3">
                      {anotherChoices.map((_anotherChoice) => (
                        <input
                          onChange={(e) => setAnotherChoice(e.target.value)}
                          value={_anotherChoice}
                          className="mt-2"
                          type="text"
                          name=""
                          placeholder={`choices `}
                        />
                      ))}
                      <input
                        onChange={(e) => setAnotherChoice(e.target.value)}
                        value={anotherChoice}
                        className="mt-2"
                        type="text"
                        name="choices"
                        placeholder={`choices ${anotherChoices.length + 1}`}
                      />

                      <div className="d-flex justify-content-between mt-4">
                        <div className="d-flex align-items-center gap-2">
                          <label htmlFor="more_answer">
                            Allow more than 1 answer
                          </label>
                          <input
                            name="more_answer"
                            id="more_answer"
                            type="checkbox"
                            onChange={(e) => {
                              setRequirement((prevState) => ({
                                ...prevState,
                                more_answer: e.target.checked,
                              }));
                            }}
                          />
                        </div>
                        <div>
                          <button
                            className="text-success fw-700 "
                            onClick={handelAnotherChoices}
                          >
                            Add another choices
                            <MdAddCircle className="fs-5 " />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className=" mt-4 d-flex align-items-center">
                    <input type="file" className=" mx-2" name="r" />
                  </div>
                  <div className="col-12">
                    <div className="d-flex my-3 justify-content-end gap-4">
                      <button
                        type="button"
                        className="theme-btn btn-style-three small w-auto"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="theme-btn btn-style-one small w-auto"
                        onClick={handleAddNewRequirement}
                      >
                        Add
                      </button>
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
};

export default FormSix;
