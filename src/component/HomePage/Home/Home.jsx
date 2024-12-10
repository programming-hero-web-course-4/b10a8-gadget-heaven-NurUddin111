import React, { createContext, useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import SideBar from "../SideBar/SideBar";
import AvailableProducts from "../AvailableProducts/AvailableProducts";
export const AllProductsContext = createContext();

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [viewAllProducts, setViewAllProducts] = useState(true);
  const [android, setAndroid] = useState([]);
  const [viewAndroid, setViewAndroid] = useState(false);
  const [iPhone, setIPhone] = useState([]);
  const [viewIPhone, setViewIPhone] = useState(false);
  const [macbook, setMacbook] = useState([]);
  const [viewMacbook, setViewMacbook] = useState(false);
  const [accessories, setAccessories] = useState([]);
  const [viewAccessories, setViewAccessories] = useState(false);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const showAllProducts = () => {
    setViewAllProducts(true);
    setViewAndroid(false);
    setViewIPhone(false);
    setViewMacbook(false);
    setViewAccessories(false);
  };

  const showAndroid = () => {
    let newAndroid = [];
    allProducts.forEach((product) => {
      if (product.category == "Android") {
        newAndroid = [...newAndroid, product];
        setAndroid(newAndroid);
      }
    });
    setViewAllProducts(false);
    setViewAndroid(true);
    setViewIPhone(false);
    setViewMacbook(false);
    setViewAccessories(false);
  };
  const showIphone = () => {
    let newIphone = [];
    allProducts.forEach((product) => {
      if (product.category == "iPhone") {
        newIphone = [...newIphone, product];
        setIPhone(newIphone);
      }
    });
    setViewAllProducts(false);
    setViewAndroid(false);
    setViewIPhone(true);
    setViewMacbook(false);
    setViewAccessories(false);
  };
  const showMacbook = () => {
    let newMacbook = [];
    allProducts.forEach((product) => {
      if (product.category == "Macbook") {
        newMacbook = [...newMacbook, product];
        setMacbook(newMacbook);
      }
    });
    setViewAllProducts(false);
    setViewAndroid(false);
    setViewIPhone(false);
    setViewMacbook(true);
    setViewAccessories(false);
  };
  const showAccessories = () => {
    let newAccessories = [];
    allProducts.forEach((product) => {
      if (product.category == "Accessories") {
        newAccessories = [...newAccessories, product];
        setAccessories(newAccessories);
      }
    });
    setViewAllProducts(false);
    setViewAndroid(false);
    setViewIPhone(false);
    setViewMacbook(false);
    setViewAccessories(true);
  };

  return (
    <div>
      <AllProductsContext.Provider
        value={{
          showAllProducts,
          allProducts,
          viewAllProducts,
          showAndroid,
          android,
          viewAndroid,
          showIphone,
          iPhone,
          viewIPhone,
          showMacbook,
          macbook,
          viewMacbook,
          showAccessories,
          accessories,
          viewAccessories,
        }}
      >
        <div className="space-y-14">
          <Banner></Banner>
          <h1 className="text-center text-7xl font-bold">
            Explore Cutting Edge Gadgets
          </h1>
          <div className="flex justify-evenly">
            <SideBar></SideBar>
            <AvailableProducts></AvailableProducts>
          </div>
        </div>
      </AllProductsContext.Provider>
    </div>
  );
};

export default Home;
