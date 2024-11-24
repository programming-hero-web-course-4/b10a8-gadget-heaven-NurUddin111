import React from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      {/* Nav With Few Details */}

      <div className="bg-[#9538E2] pt-2 mx-5 mt-3 rounded-t">
        <div className=" flex justify-around items-center">
          <h1 className="text-2xl text-white font-bold">Gadget Heaven</h1>
          <ul className="flex gap-10 text-white text-lg font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/dash-board">Dashboard</Link>
            </li>
          </ul>
          <div className="flex gap-5 items-center justify-center">
            <button className="bg-white rounded-full p-2 flex items-center justify-center">
              <FaCartArrowDown />
            </button>
            <button className="bg-white rounded-full p-2 flex items-center justify-center">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
