import React from "react";

function Modal({ MTitle }) {
  return (
    <div className="row">
      <div
        class="modal fade col"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content p-3">
            <div class="login-form default-form">
              <p>
                Hi, I am Mohamed Bidoudane from Morocco. I am committed to
                maintain professional relationships with my clients and deliver
                effective & reliable services according to their needs. I have
                5+ years of experience in the web development field. ☛Graphics
                designing ☛ Landing Page Design ☛ Design & Develop Full
                Responsive WordPress Website ☛ E-Commerce Website Development ☛
                SEO Linkbuilding & Website Optimization ☛ Wikipedia Editing I am
                quick in every task! Good day! Thanks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BasicModal = ({ title, MTitle }) => {
  return (
    <>
      <Modal MTitle={MTitle} />
      <button
        type="button"
        className="btn btn-"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {title}
      </button>
    </>
  );
};

export default BasicModal;
