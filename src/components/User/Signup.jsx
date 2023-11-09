import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Signup = ({ setUser }) => {
  const [account, setAccount] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    setAccount((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: account.email,
          password: account.password,
          username: account.username,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      } else {
        alert("Oops! Please try again.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h2>S'inscrire</h2>
      <form onSubmit={onSubmit} className="signup-form">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={account.username}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={account.email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={account.password}
          onChange={onChange}
        />
        <div className="checkbox-container">
          <div>
            <input type="checkbox" />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </>
  );
};

export default Signup;
