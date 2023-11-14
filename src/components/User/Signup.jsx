import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import axios from "axios";

const Signup = ({ setUser, setModalForm, setShowModal }) => {
  const [account, setAccount] = useState({
    username: "",
    email: "",
    password: "",
    avatar: {},
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
      const formData = new FormData();
      formData.append("username", account.username);
      formData.append("email", account.email);
      formData.append("password", account.password);
      formData.append("avatar", account.avatar);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        formData
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
      if (error.response.status === 409) {
        setErrorMessage("Email already used");
      } else {
        setErrorMessage(error.response.data.message);
      }
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
        <input
          id="file"
          type="file"
          className="input-file"
          onChange={(e) => {
            account.avatar = e.target.files[0];
          }}
        />{" "}
        <label htmlFor="file"> + Ajoute une photo</label>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
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
