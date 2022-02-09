import React, { useState } from "react";
import FormOne from "./Forms/FormOne";
import FormTwo from "./Forms/FormTow";
import FormThree from "./Forms/FormThree";
import FormFour from "./Forms/FormFour";
import FormFive from "./Forms/FormFive";
import LoginPopup from "../LoginPopup";
import FormSix from "./Forms/FormSix";
import EndForm from "./Forms/EndForm";
import Completed from "../Completed";
import { GiCheckMark } from "react-icons/gi";
import { MdEdit } from "react-icons/md";
import {APIProvider} from "./Context";
export default function OfferWizard() {
  const [next, setNext] = useState(1);
  const AllForms = [
    { form: <FormOne number={next} /> },
    // { form: <FormTwo number={next} /> },
    { form: <FormThree number={next} /> },
    { form: <FormFour number={next} /> },
    { form: <FormFive number={next} /> },
    { form: <FormSix number={next} /> },
    { form: <EndForm number={next} /> },
  ];
  return (
    <APIProvider>
    <div className="px-5">
      <div className="d-flex justify-content-evenly py-2">
        {AllForms.map(({ form }, index) => {
          return (
            <div className="d-flex flex-column align-items-center">
              <span
                onClick={() => setNext(index+1)}
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
                className={
                  next >= index + 1
                    ? "text-white bg-success border-success border align-items-center  rounded-circle d-flex justify-content-center text-center fs-4"
                    : "text-success border-success border   rounded-circle d-flex align-items-center  justify-content-center text-center fs-4"
                }
              >
                {index <= next - 1 ? (
                  <GiCheckMark />
                ) : index == next ? (
                  <MdEdit />
                ) : (
                  index + 1
                )}
              </span>
              <span>test</span>
            </div>
          );
        })}
      </div>
      {AllForms.map(({ form }, index) => next == index + 1 && form)}

      <div className=" d-flex gap-3 justify-content-end mt-4">
        {next > 1 && (
          <button
            disabled={next < 0}
            className="theme-btn social-btn-two google-btn text-center  w-auto"
            onClick={() => setNext(next - 1)}
          >
            Back
          </button>
        )}

        {next < AllForms.length ? (
          <button
            disabled={next < 0}
            className="theme-btn social-btn-two facebook-btn w-auto"
            onClick={() => setNext(next + 1)}
            href="#test"
          >
            <span>Next</span>
          </button>
        ) : (
          <Completed title="Next" MTitle="Registrations" />
        )}
      </div>
    </div>
    </APIProvider>
  );
}
