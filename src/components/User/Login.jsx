import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import axios from "axios";

const Login = ({ setUser, setModalForm, setShowModal }) => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setAccount((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage("");
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: account.email,
          password: account.password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        setShowModal(false);
        navigate("/");
      } else {
        alert("Oops! Please try again.");
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="account-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={account.email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={account.password}
          onChange={onChange}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className="teal" type="submit">
          Se connecter
        </button>
      </form>
      <div className="form-switcher" onClick={() => setModalForm("Signup")}>
        Pas encore de compte ? Inscris-toi !
      </div>
    </>
  );
};

export default Login;
