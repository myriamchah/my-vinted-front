import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

import "../assets/styles/publish.css";

const Publish = ({ token }) => {
  const [newOffer, setNewOffer] = useState({
    title: "",
    description: "",
    price: "",
    condition: "",
    city: "",
    brand: "",
    size: "",
    color: "",
    picture: {},
    acceptExchange: false,
  });

  const onChange = (e) => {
    setNewOffer((newOffer) => ({
      ...newOffer,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("title", newOffer.title);
      formData.append("description", newOffer.description);
      formData.append("brand", newOffer.brand);
      formData.append("size", newOffer.size);
      formData.append("color", newOffer.color);
      formData.append("condition", newOffer.condition);
      formData.append("city", newOffer.city);
      formData.append("price", newOffer.price);
      formData.append("picture", newOffer.picture);
      formData.append("acceptExchange", newOffer.acceptExchange);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data._id) {
        alert("Offer successfully created");
      } else {
        alert("Oops! Please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      {token ? (
        <main className="bg-lightgrey">
          <section className="container publish-container">
            <h1>Vends ton article</h1>
            <form onSubmit={onSubmit} className="publish-form">
              <div className="form-card">
                <input
                  id="file"
                  type="file"
                  className="input-file"
                  onChange={(e) => {
                    newOffer.picture = e.target.files[0];
                  }}
                />
                <label htmlFor="file"> + Ajoute une photo</label>
              </div>
              <div className="form-card">
                <div className="form-group">
                  <label htmlFor="title">Titre</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="ex : chemisier bleu"
                    value={newOffer.title}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="textarea"
                    placeholder="ex : porté plusieurs fois, taille correctement"
                    name="description"
                    value={newOffer.description}
                    onChange={onChange}
                    rows={5}
                  />
                </div>
              </div>
              <div className="form-card">
                <div className="form-group">
                  <label htmlFor="brand">Marque</label>
                  <input
                    type="text"
                    placeholder="ex : Sezane"
                    name="brand"
                    value={newOffer.brand}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="size">Taille</label>
                  <input
                    type="text"
                    placeholder="ex : M / 38 "
                    name="size"
                    value={newOffer.size}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="color">Couleur</label>
                  <input
                    type="text"
                    placeholder="ex : Bleu "
                    name="color"
                    value={newOffer.color}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="condition">Condition</label>
                  <input
                    type="text"
                    placeholder="ex : Bon état "
                    name="condition"
                    value={newOffer.condition}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">Lieu</label>
                  <input
                    type="text"
                    placeholder="ex : Paris "
                    name="city"
                    value={newOffer.city}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-card">
                <div className="form-group">
                  <label htmlFor="price">Prix</label>
                  <input
                    type="text"
                    placeholder="ex : 0,00 € "
                    name="price"
                    value={newOffer.price}
                    onChange={onChange}
                  />
                </div>
                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    name="acceptExchange"
                    value={newOffer.acceptExchange}
                    onChange={onChange}
                  />
                  <label htmlFor="acceptExchange">
                    Je suis intéressé(e) par les échanges
                  </label>
                </div>
              </div>
              <button className="teal" type="submit">
                Publier
              </button>
            </form>
          </section>
        </main>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Publish;
