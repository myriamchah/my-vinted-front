import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import axios from "axios";

const Login = ({ setUser, setModalForm }) => {
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
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: account.email,
          password: account.password,
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
      <form onSubmit={onSubmit} className="account-form">
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
