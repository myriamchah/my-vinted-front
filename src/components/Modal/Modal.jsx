import Signup from "../User/Signup";
import Login from "../User/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<FontAwesomeIcon icon="magnifying-glass" className="icon" />;
import "./modal.css";

const Modal = ({ setShowModal, setUser, modalForm, setModalForm }) => {
  return (
    <div
      className="modal"
      onClick={() => {
        setShowModal(false);
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-title">
          <h2>{modalForm === "Signup" ? "S'inscrire" : "Se connecter"}</h2>
          <FontAwesomeIcon
            icon="xmark"
            className="icon"
            onClick={() => {
              setShowModal(false);
            }}
          />
        </div>
        {modalForm === "Signup" ? (
          <Signup {...{ setUser, setModalForm, setShowModal }} />
        ) : (
          <Login {...{ setUser, setModalForm, setShowModal }} />
        )}
      </div>
    </div>
  );
};

export default Modal;
