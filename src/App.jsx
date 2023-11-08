import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
