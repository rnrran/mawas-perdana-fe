import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import WishlistPrimary from "@/components/sections/wishlist/WishlistPrimary";
import React from "react";

const WishlistMain = () => {
  return (
    <main>
      <HeroPrimary title="Wishlist" text="Wishlist" />
      <WishlistPrimary />
    </main>
  );
};

export default WishlistMain;
