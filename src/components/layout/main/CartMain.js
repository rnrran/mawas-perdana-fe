import CartPrimary from "@/components/sections/cart/CartPrimary";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import React from "react";

const CartMain = () => {
  return (
    <main>
      <HeroPrimary title="Cart" text="Cart" />
      <CartPrimary />
    </main>
  );
};

export default CartMain;
