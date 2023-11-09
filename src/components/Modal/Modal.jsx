import Signup from "../User/Signup";
// import Login from "../User/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<FontAwesomeIcon icon="magnifying-glass" className="icon" />;
import "./modal.css";

const Modal = ({ setShowModal, setUser, modalForm }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <FontAwesomeIcon
          icon="xmark"
          className="icon"
          onClick={() => {
            setShowModal(false);
          }}
        />

        {modalForm === "Signup" ? (
          <Signup {...{ setUser }} />
        ) : (
          {
            /* <Login {...{setUser }}/> */
          }
        )}
      </div>
    </div>
  );
};

export default Modal;
