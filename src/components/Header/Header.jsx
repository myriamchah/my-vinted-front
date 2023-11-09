import "./Header.css";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Header = ({ setShowModal, setModalForm, token, setUser }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <img
          src={logo}
          alt="logo Vinted"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="input-search">
          <input type="text" placeholder="Recherche des articles" />
          <FontAwesomeIcon icon="magnifying-glass" className="icon" />
        </div>

        <div>
          {token ? (
            <button
              onClick={() => {
                setUser("");
              }}
              className="coral"
            >
              Se déconnecter
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setModalForm("Signup");
                  setShowModal(true);
                }}
              >
                S'inscrire
              </button>
              <button
                onClick={() => {
                  setModalForm("Login");
                  setShowModal(true);
                }}
              >
                Se connecter
              </button>
            </>
          )}

          <button className="teal">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
