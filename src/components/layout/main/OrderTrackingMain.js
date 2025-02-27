import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import OrderTrackingPrimary from "@/components/sections/order-tracking/OrderTrackingPrimary";
import React from "react";

const OrderTrackingMain = () => {
  return (
    <main>
      <HeroPrimary title="Order Tracking" text="Order Tracking" />
      <OrderTrackingPrimary />
    </main>
  );
};

export default OrderTrackingMain;
