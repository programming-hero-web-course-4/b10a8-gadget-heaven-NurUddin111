import React from "react";
import { MdDelete } from "react-icons/md";

const WishlistedProduct = ({ product, removeFromWishlist }) => {
  const { product_id, product_image, product_title, price, description } =
    product;
  return (
    <div>
      <div className="grid grid-cols-2 items-center rounded-lg border-2 border-slate-300 py-5 px-10">
        <div className="flex gap-5 items-center justify-center">
          <img src={product_image} className="h-20 w-20 rounded" />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <p className="text-lg">{description}</p>
            <p className="text-lg">Price: {price} USD</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="w-max rounded-xl">
            <button
              onClick={() => removeFromWishlist(product_id)}
              className="bg-white font-bold text-red-900 text-2xl flex rounded-lg"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistedProduct;
