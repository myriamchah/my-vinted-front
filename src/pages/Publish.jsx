import { useState } from "react";
import axios from "axios";

const Publish = () => {
  const [newOffer, setNewOffer] = useState({
    title: "",
    description: "",
    price: "",
    condition: "",
    city: "",
    brand: "",
    size: "",
    color: "",
    picture: "",
    acceptExchange: false,
  });

  const onChange = (e) => {
    setNewOffer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        {
          title: newOffer.title,
          description: newOffer.description,
          price: newOffer.price,
          condition: newOffer.condition,
          city: newOffer.city,
          brand: newOffer.brand,
          size: newOffer.size,
          color: newOffer.color,
          picture: newOffer.picture,
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
      <main className="bg-lightgrey">
        <section className="container publish-container">
          <h1>Vends ton article</h1>
          <form onSubmit={onSubmit} className="publish-form">
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              name="title"
              placeholder="ex : chemisier bleu"
              value={newOffer.title}
              onChange={onChange}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder="ex : porté plusieurs fois, taille correctement"
              name="description"
              value={newOffer.description}
              onChange={onChange}
            />
            <label htmlFor="brand">Marque</label>
            <input
              type="text"
              placeholder="ex : Sezane"
              name="brand"
              value={newOffer.brand}
              onChange={onChange}
            />
            <label htmlFor="size">Taille</label>
            <input
              type="text"
              placeholder="ex : M / 38 "
              name="size"
              value={newOffer.size}
              onChange={onChange}
            />
            <label htmlFor="color">Couleur</label>
            <input
              type="text"
              placeholder="ex : Bleu "
              name="color"
              value={newOffer.color}
              onChange={onChange}
            />
            <label htmlFor="condition">Condition</label>
            <input
              type="text"
              placeholder="ex : Bon état "
              name="condition"
              value={newOffer.condition}
              onChange={onChange}
            />
            <label htmlFor="city">Lieu</label>
            <input
              type="text"
              placeholder="ex : Paris "
              name="city"
              value={newOffer.city}
              onChange={onChange}
            />
            <label htmlFor="price">Prix</label>
            <input
              type="text"
              placeholder="ex : 0,00 € "
              name="price"
              value={newOffer.price}
              onChange={onChange}
            />

            <button className="teal" type="submit">
              Publier mon offre
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Publish;
