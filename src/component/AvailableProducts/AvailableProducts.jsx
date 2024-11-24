import React, { useContext } from "react";
import AvailableProduct from "../AvailableProduct/AvailableProduct";
import { ProductsContext } from "../Home/Home";

const AvailableProducts = () => {
  const {
    products,
    viewProducts,
    android,
    viewAndroid,
    iPhone,
    viewIPhone,
    macbook,
    viewMacbook,
    accessories,
    viewAccessories,
  } = useContext(ProductsContext);

  return (
    <div>
      <div className="grid grid-cols-3 gap-10 justify-center">

        {viewProducts
          ? products.map((device) => (
              <AvailableProduct
                key={device.product_id}
                productDetails={device}
              ></AvailableProduct>
            ))
          : null}

        {viewAndroid
          ? android.map((device) => (
              <AvailableProduct
                key={device.product_id}
                productDetails={device}
              ></AvailableProduct>
            ))
          : null}

        {viewIPhone
          ? iPhone.map((device) => (
              <AvailableProduct
                key={device.product_id}
                productDetails={device}
              ></AvailableProduct>
            ))
          : null}

        {viewMacbook
          ? macbook.map((device) => (
              <AvailableProduct
                key={device.product_id}
                productDetails={device}
              ></AvailableProduct>
            ))
          : null}
        {viewAccessories
          ? accessories.map((device) => (
              <AvailableProduct
                key={device.product_id}
                productDetails={device}
              ></AvailableProduct>
            ))
          : null}
      </div>
    </div>
  );
};

export default AvailableProducts;
