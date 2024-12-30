import React, { createContext, useEffect, useState } from "react";
import SelectedProduct from "../SelectedProduct/SelectedProduct";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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

  let updatedPrice = 0;

  allProductsInCart?.forEach((product) => {
    if (product) {
      updatedPrice += product.price;
      localStorage.setItem("totalPrice", JSON.stringify(updatedPrice));
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

  const purchaseProduct = () => {
    if (updatedPrice > 0) {
      localStorage.setItem("cart", JSON.stringify([]));
      localStorage.setItem("totalPrice", JSON.stringify(0));
      setStoredProductsId([]);
      document.getElementById("purchase-completed-modal").showModal();
    } else {
      toast.warn("Kindly add at least one product in your cart to purchase!");
    }
  };

  const removeFromCart = (id) => {
    let updatedStoredProductsId = storedProductsId.filter(
      (product_id) => product_id !== id
    );
    localStorage.setItem("cart", JSON.stringify(updatedStoredProductsId));
    setStoredProductsId(updatedStoredProductsId);
    toast.error("Removed item successfully from cart!");
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="space-y-10 mx-20">
        <div className="flex justify-around items-center mt-10 mb-[7rem]">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="flex gap-5 items-center">
            <h1 className="text-xl font-semibold">
              Total Price : {updatedPrice} USD
            </h1>
            <div className="flex gap-5 items-center">
              <div>
                <ul className="menu menu-horizontal px-1">
                  <li className="border border-[#8332C5] rounded-lg">
                    <details>
                      <summary>
                        <button className=" text-[#9538E2] text-lg">
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
              <div className="border border-[#8332C5] rounded-lg px-3 py-[0.35rem]">
                <button
                  onClick={() => purchaseProduct()}
                  className="text-[#9538E2] text-lg"
                >
                  Purchase
                </button>
              </div>
              {/* Modal */}

              <dialog id="purchase-completed-modal" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button onClick={() => navigate("/")} className="btn">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
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
