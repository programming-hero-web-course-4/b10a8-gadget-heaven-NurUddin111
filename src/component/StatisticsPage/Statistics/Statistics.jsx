import React, { useEffect, useState } from "react";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

const Statistics = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <div>
      <div className="bg-[#9538E2] py-10 mx-5 rounded">
        <div className="space-y-5">
          <h1 className="text-5xl text-white text-center "> Statistics </h1>
          <p className="text-white text-center font-extralight">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
        </div>
      </div>
      <h1 className="text-4xl ml-20 my-10 font-semibold">Statistics</h1>
      <div className="flex justify-center mt-10">
        <ComposedChart width={1400} height={400} data={allProducts}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" barSize={20} fill="#9538E2" />
          <Scatter dataKey="rating" fill="red" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Statistics;
