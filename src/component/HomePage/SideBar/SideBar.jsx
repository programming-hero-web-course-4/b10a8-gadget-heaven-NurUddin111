import { useContext } from "react";
import { Link } from "react-router-dom";
import { AllProductsContext } from "../Home/Home";

const SideBar = () => {
  const {
    showAllProducts,
    showAndroid,
    showIphone,
    showMacbook,
    showAccessories,
  } = useContext(AllProductsContext);
  return (
    <div>
      <div className="bg-white p-5 shadow-2xl flex flex-col gap-3 h-max w-max  rounded">
        <Link to="/all-products">
          <button
            onClick={showAllProducts}
            className="border-2 font-semibold text-lg px-8 py-1 rounded-lg bg-slate-300 w-full"
          >
            All Products
          </button>
        </Link>
        <Link to="/android">
          <button
            onClick={showAndroid}
            className="border-2 font-semibold text-lg px-8 py-1 rounded-lg bg-slate-300 w-full"
          >
            Android
          </button>
        </Link>

        <Link to="/iphone">
          <button
            onClick={showIphone}
            className="border-2 font-semibold text-lg px-8 py-1 rounded-lg bg-slate-300 w-full"
          >
            iPhone
          </button>
        </Link>
        <Link to="/macbook">
          <button
            onClick={showMacbook}
            className="border-2 font-semibold text-lg px-8 py-1 rounded-lg bg-slate-300 w-full"
          >
            Macbook
          </button>
        </Link>
        <Link to="/accessories">
          <button
            onClick={showAccessories}
            className="border-2 font-semibold text-lg px-8 py-1 rounded-lg bg-slate-300 w-full"
          >
            Accessories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
