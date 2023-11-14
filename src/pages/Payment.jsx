import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/Stripe/CheckoutForm";

import "../assets/styles/payment.css";

const Payment = () => {
  const location = useLocation();
  const stripePromise = loadStripe(
    "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
  );
  const { title, price, username } = location.state;

  const buyerFees = 1;
  const shippingFees = 5;
  const totalPrice = +price + buyerFees + shippingFees;

  return (
    <>
      <main className="bg-lightgrey">
        <section className="container payment-container">
          <div className="payment-card">
            <h2>Résumé de la commande</h2>
            <div>
              Commande <span>{price} €</span>
            </div>
            <div>
              Frais protection acheteurs <span>{buyerFees} €</span>
            </div>
            <div>
              Frais de port <span>{shippingFees} €</span>
            </div>
            <hr />
            <h3>
              Total <span>{totalPrice} €</span>
            </h3>
            <div>
              Il ne vous reste plus qu'une étape pour vous offrir
              <span> {title}.</span>
              Vous allez payer <span>{totalPrice} €</span> (frais de protection
              et frais de port inclus)
            </div>
            <hr />
            <Elements stripe={stripePromise}>
              <CheckoutForm {...{ title, totalPrice, username, buyerFees }} />
            </Elements>
          </div>
        </section>
      </main>
    </>
  );
};

export default Payment;
