import { Link } from "react-router-dom";

import "./card.css";

const Card = ({ offer }) => {
  return (
    <Link to={`/offer/${offer._id}`}>
      <div className="card-article">
        <div className="avatar">
          <img
            src={offer.owner.account.avatar.secure_url}
            alt={"avatar" + offer.owner.account.username}
          />
          <span>{offer.owner && offer.owner.account.username}</span>
        </div>

        <img src={offer.product_image.secure_url} alt="product image" />
        <div className="product-info">
          <div>{offer.product_price} €</div>
          <div>{offer.product_details[1]["TAILLE"]}</div>
          <div>{offer.product_details[0]["MARQUE"]}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
