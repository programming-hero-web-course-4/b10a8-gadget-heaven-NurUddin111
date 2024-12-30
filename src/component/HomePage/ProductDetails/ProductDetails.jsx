import React, { useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { product_title } = useParams();

  const originalName = product_title.replace(/-/g, " ");

  const allProducts = useLoaderData();

  const product = allProducts.find(
    (product) => product.product_title === originalName
  );

  const {
    product_id,
    product_image,
    price,
    description,
    Specification,
    rating,
  } = product;

  let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));

  const addToCart = (id) => {
    totalPrice += price;
    let storedProducts = JSON.parse(localStorage.getItem("cart"));
    if (storedProducts) {
      if (totalPrice < 1000) {
        storedProducts.push(id);
        localStorage.setItem("cart", JSON.stringify(storedProducts));
        localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
        toast.success("Successfully Added To Your Cart!");
      } else {
        toast.warn("You can't add products in cart worth more than 1000 USD");
      }
    } else {
      storedProducts = [];
      storedProducts.push(id);
      localStorage.setItem("cart", JSON.stringify(storedProducts));
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
      toast.success("Successfully Added To Your Cart!");
    }
  };

  const addToWishlist = (id) => {
    let storedProducts = JSON.parse(localStorage.getItem("wishlist"));
    if (storedProducts) {
      if (storedProducts.includes(id)) {
        toast.warn(
          "Sorry! This Product Has Already Been Added To Your Wishlist"
        );
      } else {
        storedProducts.push(id);
        localStorage.setItem("wishlist", JSON.stringify(storedProducts));
        toast.success("Successfully Added To Your Wishlist!");
      }
    } else {
      storedProducts = [];
      storedProducts.push(id);
      localStorage.setItem("wishlist", JSON.stringify(storedProducts));
      toast.success("Successfully Added To Your Wishlist!");
    }
  };

  return (
    <div>
      <div className="bg-[#9538E2] pt-5 pb-56 mx-5">
        <div className="space-y-5">
          <h1 className="text-5xl text-white text-center ">Product Details</h1>
          <p className="text-white text-center font-extralight">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-lg -mt-52 relative">
        <div className="bg-white flex justify-center gap-5 items-center border-white border-2 p-3 rounded-lg w-[53rem] h-max shadow-slate-600 shadow-md">
          <img className="h-[28rem] w-[29rem] rounded-lg" src={product_image} />
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">{originalName}</h1>
            <p className="text-xl font-semibold">Price: $ {price}</p>
            <div className="bg-green-100 px-5 py-1 rounded-xl w-max text-green-700">
              <p>In Stock</p>
            </div>
            <p className="text-slate-500">{description}</p>
            <h1 className="text-2xl font-bold">Specification</h1>
            <ul className="text-base text-slate-500 font-semibold">
              {Specification.map((feature, index) => (
                <li key={index}>
                  {index + 1}. {feature}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold">Rating</h1>
              <FaRegStar />
            </div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <div className="ml-4 bg-slate-300 rounded-xl px-2">
                <p>{rating}</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div>
                <button
                  onClick={() => addToCart(product_id)}
                  className="font-semibold bg-[#9538E2] w-max rounded flex gap-2 text-white items-center justify-center px-4 py-1 "
                >
                  Add To Cart <BsCart3 />
                </button>
              </div>
              <div className="border border-black w-max flex items-center rounded-full p-1">
                <button onClick={() => addToWishlist(product_id)}>
                  <CiHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
