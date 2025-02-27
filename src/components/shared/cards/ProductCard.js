"use client";
import countDiscount from "@/libs/countDiscount";
import modifyAmount from "@/libs/modifyAmount";
import { useCartContext } from "@/providers/CartContext";
import { useProductContext } from "@/providers/ProductContext";
import { useWishlistContext } from "@/providers/WshlistContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const { title, price, disc, image, id, status, run, model, type, color } =
    product;
  const { setCurrentProduct } = useProductContext();
  const { netPrice } = countDiscount(price, disc);
  const netPriceModified = modifyAmount(netPrice);
  const priceModified = modifyAmount(price);
  const { addProductToCart } = useCartContext();
  const { addProductToWishlist } = useWishlistContext();

  return (
    <div
      className="ltn__product-item ltn__product-item-3 text-center"
      onMouseEnter={() => setCurrentProduct(product)}
    >
      <div className="product-img">
        <Link href={`/products/${id}`}>
          <Image
            src={image}
            alt="#"
            // priority={false}
            loading="lazy"
            width={1000}
            height={1000}
          />
        </Link>
        {status ? (
          <div className="product-badge">
            <ul>
              <li className="soldout-badge">{status}</li>
            </ul>
          </div>
        ) : (
          ""
        )}
        <div className="product-hover-action">
          <ul>
            <li>
              <Link
                href="#"
                title="Quick View"
                data-bs-toggle="modal"
                data-bs-target="#quick_view_modal"
              >
                <i className="far fa-eye"></i>
              </Link>
            </li>
            <li>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  addProductToCart({
                    ...product,
                    quantity: 1,
                    color: color,
                  });
                }}
                href="#"
                title="Add to Cart"
                data-bs-toggle="modal"
                data-bs-target="#add_to_cart_modal"
              >
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </li>
            <li>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  addProductToWishlist({ ...product, quantity: 1 });
                }}
                href="#"
                title="Wishlist"
                data-bs-toggle="modal"
                data-bs-target="#liton_wishlist_modal"
              >
                <i className="far fa-heart"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="product-info">
        <h2 className="product-title">
          <Link href={`/products/${id}`}>{title}</Link>
        </h2>
        <div className="product-price">
          <span>${netPriceModified}</span> <del>${priceModified}</del>
        </div>
        <div className="product-info-brief">
          <ul>
            <li>
              <i className="fas fa-car"></i>
              {model}
            </li>
            <li>
              <i className="fas fa-cog"></i>
              {type}
            </li>
            <li>
              <i className="fas fa-road"></i>
              {run}kph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
