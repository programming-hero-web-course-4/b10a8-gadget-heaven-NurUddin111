import React from "react";

const SelectedProduct = ({ product }) => {
  const { product_image, product_title, price, description } = product;
  return (
    <div>
      <div className="flex justify-between items-center p-5 rounded-lg border-2 border-slate-300">
        <div className="flex gap-5 items-center">
          <img src={product_image} className="h-20 w-20 rounded" />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <p className="text-lg">{description}</p>
            <p className="text-lg">
              Price: {price} USD
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <div className="w-max justify-center border-2 border-red-900 p-1 rounded-xl">
              <button
                // onClick={() => terminateContract(player)}
                className="bg-red-900 font-bold text-white text-lg px-8 py-3 rounded-lg"
              >
                Remove Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
