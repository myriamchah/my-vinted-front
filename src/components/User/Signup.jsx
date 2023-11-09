import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import axios from "axios";

const Signup = ({ setUser, setModalForm, setShowModal }) => {
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
        alert("Account successfully created");
        setShowModal(false);
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
      <form onSubmit={onSubmit} className="account-form">
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          value={account.username}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={account.email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={account.password}
          onChange={onChange}
        />
        <button className="teal" type="submit">
          S'inscrire
        </button>
      </form>
      <div className="form-switcher" onClick={() => setModalForm("Login")}>
        Tu as déjà un compte ? Connecte-toi !
      </div>
    </>
  );
};

export default Signup;
