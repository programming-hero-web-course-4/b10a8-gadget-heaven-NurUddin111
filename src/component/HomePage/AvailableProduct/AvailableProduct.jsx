import React from "react";
import { Link } from "react-router-dom";

const AvailableProduct = ({ productDetails }) => {
  const { product_image, product_title, price } = productDetails;

  const formattedName = product_title.replace(/\s+/g, "-");

  return (
    <div>
      <div className="flex flex-col justify-center items-center shadow-slate-500 shadow-2xl px-7 py-7 rounded-lg border-2 border-slate-200">
        <div className="space-y-3">
          <div className="h-[19rem] w-[19rem]">
            <img className="h-full w-full rounded-lg" src={product_image} />
          </div>
          <h1 className="text-2xl font-bold">{product_title}</h1>
          <div className="flex flex-col gap-3 text-lg font-semibold">
            <p>
              Price: <span>{price}</span> USD
            </p>
            <Link to={`${formattedName}`}>
              <button
                className="font-semibold text-[#9538E2]  text-lg px-8 py-1 border-2 border-[#9538E2] rounded-lg"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableProduct;
