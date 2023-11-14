import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ title, totalPrice, username }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: username,
      });

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: totalPrice,
        }
      );
      console.log(response.data);
      if (response.data.status === "succeeded") {
        setSucceeded(true);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {succeeded ? (
        <p className="payment-success">
          Paiement bien reçu. Merci pour votre commande !
        </p>
      ) : (
        <form onSubmit={onSubmit}>
          <CardElement />

          <button className="teal" type="submit">
            Acheter
          </button>
        </form>
      )}
    </>
  );
};

export default CheckoutForm;
