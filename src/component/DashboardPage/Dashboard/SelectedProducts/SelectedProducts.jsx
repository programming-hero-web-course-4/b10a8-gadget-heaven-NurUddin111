import React, { createContext, useEffect, useState } from "react";
import SelectedProduct from "../SelectedProduct/SelectedProduct";
import { toast } from "react-toastify";

export const SelectedProductsContext = createContext();

const SelectedProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const [storedProductsId, setStoredProductsId] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );

  const removeFromCart = (id) => {
    let updatedStoredProductsId = storedProductsId.filter(
      (product_id) => product_id !== id
    );
    localStorage.setItem("cart", JSON.stringify(updatedStoredProductsId));
    setStoredProductsId(updatedStoredProductsId);
    toast.error("Removed item successfully from cart!");
  };

  const overviewCart = allProducts?.filter((product) =>
    storedProductsId?.includes(product.product_id)
  );

  const allProductsInCart = storedProductsId?.map((id) =>
    allProducts.find((product) => product.product_id === id)
  );

  const productsQuantity = {};

  allProductsInCart?.forEach((device) => {
    if (device && device.product_id) {
      const id = device.product_id;
      if (productsQuantity[id]) {
        productsQuantity[id]++;
      } else {
        productsQuantity[id] = 1;
      }
    }
  });

  let totalPrice = 0;

  allProductsInCart?.forEach((product) => {
    if (product) {
      totalPrice += product.price;
    }
  });

  const productsPriceAscendingOrder = [...overviewCart].sort(
    (a, b) => a.price - b.price
  );
  const productsPriceDescendingOrder = [...overviewCart].sort(
    (a, b) => b.price - a.price
  );

  const [generalOrder, setGeneralOrder] = useState(true);
  const [ascendingOrder, setAscendingOrder] = useState(false);
  const [descendingOrder, setDescendingOrder] = useState(false);

  const priceLowToHigh = () => {
    setAscendingOrder(true);
    setGeneralOrder(false);
    setDescendingOrder(false);
  };

  const priceHighToLow = () => {
    setDescendingOrder(true);
    setGeneralOrder(false);
    setAscendingOrder(false);
  };

  return (
    <div>
      <div className="space-y-10 mx-20">
        <div className="flex justify-around items-center mt-10 mb-[7rem]">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="flex gap-5 items-center">
            <h1 className="text-xl font-semibold">
              Total Price : {totalPrice} USD
            </h1>
            <div className="flex gap-5 items-center">
              <div>
                <ul className="menu menu-horizontal px-1">
                  <li className="border border-[#8332C5] rounded-lg">
                    <details>
                      <summary>
                        <button className=" text-[#9538E2]">
                          Sort By Price
                        </button>
                      </summary>
                      <ul className="p-2 space-y-2">
                        <li className="bg-slate-300 rounded-lg">
                          <button onClick={priceLowToHigh}>Low To High</button>
                        </li>
                        <li className="bg-slate-300 rounded-lg">
                          <button onClick={priceHighToLow}>High To Low</button>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
              <div>Purchase</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <SelectedProductsContext.Provider
            value={{ productsQuantity, removeFromCart }}
          >
            {generalOrder
              ? overviewCart?.map((product) => (
                  <SelectedProduct
                    key={product.product_id}
                    product={product}
                  ></SelectedProduct>
                ))
              : null}
            {ascendingOrder
              ? productsPriceAscendingOrder?.map((product) => (
                  <SelectedProduct
                    key={product.product_id}
                    product={product}
                  ></SelectedProduct>
                ))
              : null}
            {descendingOrder
              ? productsPriceDescendingOrder?.map((product) => (
                  <SelectedProduct
                    key={product.product_id}
                    product={product}
                  ></SelectedProduct>
                ))
              : null}
          </SelectedProductsContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default SelectedProducts;
