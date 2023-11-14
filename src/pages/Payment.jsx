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

  return (
    <>
      <main className="bg-lightgrey">
        <section className="container publish-container">
          <Elements stripe={stripePromise}>
            <CheckoutForm {...{ title, price, username }} />
          </Elements>
        </section>
      </main>
    </>
  );
};

export default Payment;
