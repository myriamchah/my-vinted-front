import { useParams } from "react-router-dom";

const Offer = () => {
  //   const params = useParams();
  // useParams permet de récupérer les params présent dans l'url de la page

  const { id } = useParams();
  console.log(id);
  //   console.log(params.id);

  return <main>Je suis sur la page Offer, son id est {id}</main>;
};

export default Offer;
