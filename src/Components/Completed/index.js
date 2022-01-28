import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Modal({ MTitle }) {
  return (
    <div className="row">
      <div
        className="modal fade col"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content p-3">
            <div className="auto-container">
              <div className="d-flex flex-column align-items-center justify-content-center my-3">
                <AiOutlineCheckCircle className="fs-1 text-success" />
                <h4>Your order is completed!</h4>
                <div className="text">
                  Thank you. Your order has been received.
                </div>
              </div>

              <ul className="order-info">
                <li>
                  <span>Project Number :</span>
                  <strong> 13119</strong>
                </li>

                <li>
                  <span>Date :</span>
                  <strong> 27/07/2021</strong>
                </li>
              </ul>
              <div className="w-100 d-flex justify-content-end">
                <NavLink to="/home">
                  <button
                    className="btn btn-success "
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Okay
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Completed = ({ title, MTitle }) => {
  return (
    <>
      <Modal MTitle={MTitle} />
      <button
        type="button"
        className="theme-btn social-btn-two facebook-btn w-auto"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {title}
      </button>
    </>
  );
};

export default Completed;
