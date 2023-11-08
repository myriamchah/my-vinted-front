import "./Header.css";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="logo Vinted" />
        <div className="input-search">
          <input type="text" placeholder="Recherche des articles" />
          <FontAwesomeIcon icon="magnifying-glass" className="icon" />
        </div>

        <div>
          <button>S'inscrire</button>
          <button>Se connecter</button>
          <button className="teal">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
