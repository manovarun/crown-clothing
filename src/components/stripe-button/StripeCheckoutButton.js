import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      shippingAddress
      billingAddress={false}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
    />
  );
};

export default StripeCheckoutButton;
