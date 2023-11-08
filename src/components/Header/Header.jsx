import "./Header.css";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="logo Vinted" />
        <div className="input-search"></div>
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
