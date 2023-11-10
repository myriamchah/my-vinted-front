import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass, faXmark);
import "./App.css";

import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [showModal, setShowModal] = useState(false);
  const [modalForm, setModalForm] = useState("");
  const [searched, setSearched] = useState("");

  const setUser = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token);
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  return (
    <Router>
      <Header
        {...{ token, setUser, setShowModal, setModalForm, setSearched }}
      />
      <Routes>
        <Route path="/" element={<Home {...{ searched }} />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
      {showModal && (
        <Modal {...{ setShowModal, setUser, modalForm, setModalForm }} />
      )}
    </Router>
  );
}

export default App;
