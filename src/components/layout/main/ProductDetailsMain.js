"use client";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import ProductDetailsPrimary from "@/components/sections/product-details/ProductDetailsPrimary";

import Products5 from "@/components/sections/products/Products5";
import CommonContext from "@/providers/CommonContext";

const ProductDetailsMain = ({ title, text, type, isNotSidebar, isCar }) => {
  return (
    <main>
      <HeroPrimary
        title={title ? title : "Detail Produk"}
        text={text ? text : "Detail Produk"}
      />
      <CommonContext value={{ type, isNotSidebar, isCar }}>
        <ProductDetailsPrimary />
      </CommonContext>
      <Products5 isRelated={true} title="Related Products" tag="// cars" />
    </main>
  );
};

export default ProductDetailsMain;
