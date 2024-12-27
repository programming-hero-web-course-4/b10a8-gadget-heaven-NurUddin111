import React, { useContext } from "react";
import { SelectedProductsContext } from "../SelectedProducts/SelectedProducts";
import { MdDelete } from "react-icons/md";

const SelectedProduct = ({ product }) => {
  const { product_id, product_image, product_title, price, description } =
    product;
  const { productsQuantity, removeFromCart } = useContext(
    SelectedProductsContext
  );

  return (
    <div>
      <div className="grid grid-cols-3 items-center rounded-lg border-2 border-slate-300 py-5 px-10">
        <div className="flex gap-5 items-center justify-center">
          <img src={product_image} className="h-20 w-20 rounded" />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <p className="text-lg">{description}</p>
            <p className="text-lg">Price: {price} USD</p>
          </div>
        </div>

        <div className="flex justify-center">
          <h1 className="text-2xl font-bold">
            Quantity: {productsQuantity[product_id]}
          </h1>
        </div>

        <div className="flex justify-end">
          <div className="w-max rounded-xl">
            <button
              onClick={() => removeFromCart(product_id)}
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

export default SelectedProduct;
