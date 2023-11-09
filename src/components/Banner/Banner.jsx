import "./Banner.css";
import tear from "../../assets/img/tear.svg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="card">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <button className="teal">Commencer à vendre</button>
        </div>
      </div>
      <img src={tear} alt="torn white effect" />
    </section>
  );
};

export default Banner;
