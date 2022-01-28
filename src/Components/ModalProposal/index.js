import React from "react";

function Modal({ MTitle }) {
  return (
    <div className="row w-100 bg-black">
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
              <div class="form-inner">
                <h3>{MTitle}</h3>

                <form method="post" action="add-parcel.html">
                  <div class="form-group d-flex gap-4">
                    <div>
                      <label>Price</label>
                      <input
                        type="number"
                        name="username"
                        placeholder="Price"
                        required
                      />
                    </div>
                    <div>
                      <label>Duration</label>
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <textarea
                      name="message"
                      placeholder="Describe Your Proposal"
                      className="overflow-auto"
                    />
                  </div>

                  <div class="form-group">
                    <button
                      class="theme-btn btn-style-one"
                      type="submit"
                      name="log-in"
                    >
                      Send Your Proposal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ModalButton = ({ title, MTitle }) => {
  return (
    <>
      <Modal MTitle={MTitle} />
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {title}
      </button>
    </>
  );
};

export default ModalButton;
