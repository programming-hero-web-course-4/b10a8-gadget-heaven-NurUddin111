import React, { useContext } from "react";
import AvailableProduct from "../AvailableProduct/AvailableProduct";
import { AllProductsContext } from "../Home/Home";

const AvailableProducts = () => {
  const {
    allProducts,
    viewAllProducts,
    android,
    viewAndroid,
    iPhone,
    viewIPhone,
    macbook,
    viewMacbook,
    accessories,
    viewAccessories,
  } = useContext(AllProductsContext);
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 justify-center">
        {viewAllProducts
          ? allProducts.map((device) => (
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
