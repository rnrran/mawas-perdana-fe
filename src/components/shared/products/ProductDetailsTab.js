import React from "react";
import ProductDetailsReviews from "./ProductDetailsReviews";
import Link from "next/link";
import TabDescription from "./TabDescription";
import countCommentLength from "@/libs/countCommentLength";

const ProductDetailsTab = ({ product }) => {
  const { reviews } = product ? product : {};

  // variables
  const reviewsLength = countCommentLength(reviews);
  return (
    <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
      <div className="ltn__shop-details-tab-menu">
        <div className="nav">
          <Link
            className="active show"
            data-bs-toggle="tab"
            href="#liton_tab_details_1_1"
          >
            Deskripsi
          </Link>
        </div>
      </div>
      <div className="tab-content">
        <div className="tab-pane fade active show" id="liton_tab_details_1_1">
          <TabDescription />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTab;
