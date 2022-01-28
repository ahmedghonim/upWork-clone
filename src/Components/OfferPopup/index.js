import React from "react";
import { Button, Modal } from "react-bootstrap";
import OfferWizard from "../OfferWizard";

function MyVerticallyCenteredModal(props) {
  return (
    <div className="row ">
      <div
        class="modal fade col w-100"
        
      >
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OfferWizard />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div></div>
  );
}

function OfferPopup() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />


    </>
  );
}

// function Modal({ MTitle }) {
//   return (
//     <div className="row">
//       <div
//         class="modal fade col"
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-center">

//           <div class="modal-content p-3">
//             <div class="login-form default-form">
//               <div class="form-inner">
//                 <h3>{MTitle}</h3>

//
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const OfferPopup = ({ title, MTitle }) => {
//   return (
//     <>
//       <Modal MTitle={MTitle} />
//       <button
//         type="button"
//         className="w-100 theme-btn btn-style-three small"
//         data-bs-toggle="modal"
//         data-bs-target="#exampleModal"
//       >
//         {title}
//       </button>
//     </>
//   );
// };

export default OfferPopup;
