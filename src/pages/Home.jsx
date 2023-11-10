import axios from "axios";
import { useState, useEffect } from "react";

import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";

const Home = ({ searched, sortAsc, range }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${searched}&sort=${
            sortAsc ? "price-asc" : "price-desc"
          }&priceMin=${range[0]}&priceMax=${range[1]}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [searched, sortAsc, range]);

  return (
    <>
      {isLoading ? (
        <span>En cours de chargement... </span>
      ) : (
        <main>
          <Banner />
          <section className="cards-wrapper container">
            {data.offers.map((offer) => {
              return <Card key={offer.id} {...{ offer }} />;
            })}
          </section>
        </main>
      )}
    </>
  );
};

export default Home;
