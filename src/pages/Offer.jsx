import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
const Offer = () => {
  const [offer, setOffer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setOffer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <span>En cours de chargement... </span>
      ) : (
        <main className="bg-lightgrey">
          <section className="container offer-container">
            <img
              className="offer-img"
              src={offer.product_image?.secure_url}
              alt={offer.product_name}
            />
            <div className="offer-card">
              <h1>{offer.product_price} €</h1>
              <div className="offer-product-info">
                {offer.product_details.map((detail, i) => {
                  return (
                    <div key={i}>
                      <span>{Object.keys(detail)[0]}</span>
                      <span>{detail[Object.keys(detail)[0]]}</span>
                    </div>
                  );
                })}
              </div>
              <hr />
              <div className="offer-info">
                <p className="name">{offer.product_name}</p>
                <p className="description">{offer.product_description}</p>
              </div>
              <div className="avatar">
                <img
                  src={offer.owner.account.avatar?.secure_url}
                  alt={"avatar" + offer.owner.account.username}
                />
                <span>{offer.owner && offer.owner.account.username}</span>
              </div>
              <button
                className="teal"
                onClick={() => {
                  navigate("/payment", {
                    state: {
                      title: offer.product_name,
                      price: offer.product_price,
                      username: offer.owner.account.username,
                    },
                  });
                }}
              >
                ACHETER
              </button>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Offer;
