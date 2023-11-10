import "./Header.css";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PriceRange from "../PriceRange/PriceRange";
import { useNavigate } from "react-router-dom";

const Header = ({
  setShowModal,
  setModalForm,
  token,
  setUser,
  setSearched,
  sortAsc,
  setSortAsc,
  setRange,
}) => {
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
          <input
            type="text"
            placeholder="Recherche des articles"
            onChange={(e) => {
              setSearched(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate("/");
              }
            }}
          />
          <FontAwesomeIcon icon="magnifying-glass" className="icon" />
        </div>
        <div className="sort-section">
          <div>
            <span>Trier par prix</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={sortAsc}
                onClick={() => {
                  setSortAsc(!sortAsc);
                }}
                onChange={() => {
                  console.log(sortAsc);
                }}
              />
              <span></span>
            </label>
          </div>
          <div>
            <span>Filtrer min/max </span>
            <PriceRange {...{ setRange }} />
          </div>
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
