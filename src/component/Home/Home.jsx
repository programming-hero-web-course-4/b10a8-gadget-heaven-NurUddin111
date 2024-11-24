import React, { createContext, useEffect, useState } from "react";
import AvailableProducts from "../AvailableProducts/AvailableProducts";
import { Link } from "react-router-dom";

export const ProductsContext = createContext();

const Home = () => {
  const [products, setProducts] = useState([]);
  const [viewProducts, setViewProducts] = useState(true);
  const [android, setAndroid] = useState([]);
  const [viewAndroid, setViewAndroid] = useState(true);
  const [iPhone, setIPhone] = useState([]);
  const [viewIPhone, setViewIPhone] = useState(false);
  const [macbook, setMacbook] = useState([]);
  const [viewMacbook, setViewMacbook] = useState(false);
  const [accessories, setAccessories] = useState([]);
  const [viewAccessories, setViewAccessories] = useState(false);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const showAllProducts = () => {
    setViewProducts(true);
    setViewAndroid(false);
    setViewIPhone(false);
    setViewMacbook(false);
    setViewAccessories(false);
  };

  const showAndroid = () => {
    let newAndroid = [];
    products.forEach((product) => {
      if (product.category == "Android") {
        newAndroid = [...newAndroid, product];
        setAndroid(newAndroid);
      }
    });
    setViewProducts(false);
    setViewAndroid(true);
    setViewIPhone(false);
    setViewMacbook(false);
    setViewAccessories(false);
  };

  const showIphone = () => {
    let newIphone = [];
    products.forEach((product) => {
      if (product.category == "iPhone") {
        newIphone = [...newIphone, product];
        setIPhone(newIphone);
      }
    });
    setViewProducts(false);
    setViewAndroid(false);
    setViewIPhone(true);
    setViewMacbook(false);
    setViewAccessories(false);
  };

  const showMacbook = () => {
    let newMacbook = [];
    products.forEach((product) => {
      if (product.category == "Macbook") {
        newMacbook = [...newMacbook, product];
        setMacbook(newMacbook);
      }
    });
    setViewProducts(false);
    setViewAndroid(false);
    setViewIPhone(false);
    setViewMacbook(true);
    setViewAccessories(false);
  };

  const showAccessories = () => {
    let newAccessories = [];
    products.forEach((product) => {
      if (product.category == "Accessories") {
        newAccessories = [...newAccessories, product];
        setAccessories(newAccessories);
      }
    });
    setViewProducts(false);
    setViewAndroid(false);
    setViewIPhone(false);
    setViewMacbook(false);
    setViewAccessories(true);
  };

  return (
    <div>
      <div className="my-10 space-y-10">
        <h1 className="text-4xl font-semibold text-center">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      <div className="flex justify-evenly">
        <div className="bg-white p-5 shadow-2xl max-h-max flex flex-col gap-3 rounded">
          <button
            onClick={showAllProducts}
            className="border-2 font-semibold text-lg px-8 py-1 rounded-lg bg-slate-300"
          >
            <Link to="/all-products">All Products</Link>
          </button>
          <button
            onClick={showAndroid}
            className="border-2 font-semibold text-lg px-8 py-1 rounded-lg bg-slate-300"
          >
            <Link to="/android">Android</Link>
          </button>
          <button
            onClick={showIphone}
            className="border-2 font-semibold text-lg px-8 py-1 rounded-lg bg-slate-300"
          >
            <Link to="/iphone">iPhone</Link>
          </button>
          <button
            onClick={showMacbook}
            className="border-2 font-semibold text-lg px-8 py-1 rounded-lg bg-slate-300"
          >
            <Link to="/macbook">Macbook</Link>
          </button>
          <button
            onClick={showAccessories}
            className="border-2 font-semibold text-lg px-8 py-1 rounded-lg bg-slate-300"
          >
            <Link to="/accessories">Accessories</Link>
          </button>
        </div>
        {viewProducts ? (
          <ProductsContext.Provider
            value={{ products, viewProducts, android, viewAndroid }}
          >
            <AvailableProducts></AvailableProducts>
          </ProductsContext.Provider>
        ) : null}
        {viewAndroid ? (
          <ProductsContext.Provider value={{ android, viewAndroid }}>
            <AvailableProducts></AvailableProducts>
          </ProductsContext.Provider>
        ) : null}
        {viewIPhone ? (
          <ProductsContext.Provider value={{ iPhone, viewIPhone }}>
            <AvailableProducts></AvailableProducts>
          </ProductsContext.Provider>
        ) : null}
        {viewMacbook ? (
          <ProductsContext.Provider value={{ macbook, viewMacbook }}>
            <AvailableProducts></AvailableProducts>
          </ProductsContext.Provider>
        ) : null}
        {viewAccessories ? (
          <ProductsContext.Provider value={{ accessories, viewAccessories }}>
            <AvailableProducts></AvailableProducts>
          </ProductsContext.Provider>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
