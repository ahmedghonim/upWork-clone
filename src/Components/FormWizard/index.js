import React, { useState } from "react";
import FormOne from "./Forms/FormOne";
import FormTwo from "./Forms/FormTow";
import FormThree from "./Forms/FormThree";
import LoginPopup from "../LoginPopup";


export default function OfferWizard() {
  const [next, setNext] = useState(1);

  return (
    <div>
      <div className="d-flex justify-content-evenly py-2">
        <h3
          style={{ width: "50px" }}
          className={
            next >= 1
              ? "text-white bg-primary border-primary border px-3 py-2 rounded-circle"
              : "text-primary border-primary border px-3 py-2 rounded-circle"
          }
        >
          1
        </h3>
        <h3
          style={{ width: "50px" }}
          className={
            next >= 2
              ? "text-white bg-primary border-primary border px-3 py-2 rounded-circle"
              : "text-primary border-primary border px-3 py-2 rounded-circle"
          }
        >
          2
        </h3>
        <h3
          style={{ width: "50px" }}
          className={
            next >= 3
              ? "text-white bg-primary border-primary border px-3 py-2 rounded-circle"
              : "text-primary border-primary border px-3 py-2 rounded-circle"
          }
        >
          3
        </h3>
        <h3
          style={{ width: "50px" }}
          className={
            next >= 4
              ? "text-white bg-primary border-primary border px-3 py-2 rounded-circle"
              : "text-primary border-primary border px-3 py-2 rounded-circle"
          }
        >
          4
        </h3>
      </div>
      {next == 1 && <FormOne number={next} />}
      {next == 2 && <FormTwo number={next} />}
      {next == 3 && <FormThree number={next} />}
      <div className="container form-group row justify-content-end">
        <div className="col-2 ">
          {next > 1 && (
            <button
              disabled={next < 0}
              className="theme-btn social-btn-two google-btn text-center"
              onClick={() => setNext(next - 1)}
            >
              Back
            </button>
          )}
        </div>
        <div className="col-2">
          {next < 3 ? (
            <button
              disabled={next < 0}
              className="theme-btn social-btn-two facebook-btn"
              onClick={() => setNext(next + 1)}
            >
              <span>Next</span>
            </button>
          ) : (
            <LoginPopup title="Next" MTitle="Registrations" />
          )}
        </div>
      </div>
    </div>
  );
}
