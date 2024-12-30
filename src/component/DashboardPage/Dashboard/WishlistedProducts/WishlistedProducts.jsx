import React, { useEffect, useState } from "react";
import WishlistedProduct from "../WishlistedProduct/WishlistedProduct";
import { toast } from "react-toastify";

const WishlistedProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const [wishlistedProductsId, setWishlistedProductsId] = useState(
    JSON.parse(localStorage.getItem("wishlist"))
  );

  let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
  console.log(totalPrice)

  const addToCartFromWishlist = (id, price) => {
    console.log(id,price)
    totalPrice += price;
    let storedProducts = JSON.parse(localStorage.getItem("cart"));
    if (storedProducts) {
      if (totalPrice < 1000) {
        storedProducts.push(id);
        localStorage.setItem("cart", JSON.stringify(storedProducts));
        localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
        let updatedWishlistedProductsId = wishlistedProductsId.filter(
          (product_id) => product_id !== id
        );
        localStorage.setItem(
          "wishlist",
          JSON.stringify(updatedWishlistedProductsId)
        );
        setWishlistedProductsId(updatedWishlistedProductsId);
        toast.success("Successfully Added To Your Cart!");
      } else {
        toast.warn("You can't add products in cart worth more than 1000 USD");
      }
    } else {
      storedProducts = [];
      storedProducts.push(id);
      localStorage.setItem("cart", JSON.stringify(storedProducts));
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
      let updatedWishlistedProductsId = wishlistedProductsId.filter(
        (product_id) => product_id !== id
      );
      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlistedProductsId)
      );
      setWishlistedProductsId(updatedWishlistedProductsId);
      toast.success("Successfully Added To Your Cart!");
    }
  };

  const removeFromWishlist = (id) => {
    let updatedWishlistedProductsId = wishlistedProductsId.filter(
      (product_id) => product_id !== id
    );
    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlistedProductsId)
    );
    setWishlistedProductsId(updatedWishlistedProductsId);
    toast.error("Removed item successfully from Wishlist!");
  };

  const overviewWishlist = allProducts?.filter((product) =>
    wishlistedProductsId?.includes(product.product_id)
  );

  return (
    <div>
      <div className="space-y-10 mx-20">
        <div className="flex justify-start items-center my-10 ml-[20rem]">
          <h1 className="text-2xl font-bold">Wishlist</h1>
        </div>
        <div className="flex flex-col gap-5">
          {overviewWishlist?.map((product) => (
            <WishlistedProduct
              key={product.product_id}
              product={product}
              removeFromWishlist={removeFromWishlist}
              addToCartFromWishlist={addToCartFromWishlist}
            ></WishlistedProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistedProducts;
