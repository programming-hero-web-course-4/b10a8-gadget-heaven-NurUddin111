import React, { createContext, useEffect, useState } from "react";
import AvailableProducts from "../src/component/HomePage/AvailableProducts/AvailableProducts";
import Home from "../src/component/HomePage/Home/Home";

// export const AllProductsContext = createContext();

const Context = () => {

//   const [allProducts, setAllProducts] = useState([]);

//   useEffect(() => {
//     fetch("/public/products.json")
//       .then((res) => res.json())
//       .then((data) => setAllProducts(data));
//   }, []);
  
  return (
    <div>
      <AllProductsContext.Provider value={allProducts}>
        <Home></Home>
        <AvailableProducts></AvailableProducts>
      </AllProductsContext.Provider>
    </div>
  );
};

export default Context;
