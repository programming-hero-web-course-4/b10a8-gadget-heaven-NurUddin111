import React, { useState } from "react";
import SelectedProducts from "./SelectedProducts/SelectedProducts";
import WishlistedProducts from "./WishlistedProducts/WishlistedProducts";

const Dashboard = () => {
  const [cart, setCart] = useState(true);
  const [wishlist, setWishlist] = useState(false);
  const [cartBg, setCartBg] = useState("bg-white");
  const [wishlistBg, setWishlistBg] = useState("bg-[#9538E2]");
  const [cartText, setCartText] = useState("text-[#9538E2]");
  const [wishlistText, setWishlistText] = useState("text-white");
  const viewCart = (show, hide) => {
    setCart(show);
    setWishlist(hide);
    setCartBg("bg-white");
    setWishlistBg("bg-[#9538E2]");
    setCartText("text-[#9538E2]");
    setWishlistText("text-white");
  };

  const viewWishlist = (show, hide) => {
    setWishlist(show);
    setCart(hide);
    setCartBg("bg-[#9538E2]");
    setWishlistBg("bg-white");
    setCartText("text-white");
    setWishlistText("text-[#9538E2]");
  };

  return (
    <div>
      <div className="bg-[#9538E2] py-10 mx-5 rounded">
        <div className="space-y-5">
          <h1 className="text-5xl text-white text-center ">Dashboard </h1>
          <p className="text-white text-center font-extralight">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <div className="flex justify-center gap-5">
            <button
              onClick={() => viewCart(true, false)}
              className={`w-[10rem] rounded-full py-2 flex items-center justify-center text-xl ${cartText} border border-white ${cartBg}`}
            >
              Cart
            </button>
            <button
              onClick={() => viewWishlist(true, false)}
              className={`w-[10rem] rounded-full py-2 flex items-center justify-center text-xl ${wishlistText} border border-white ${wishlistBg}`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      {cart ? <SelectedProducts></SelectedProducts> : null}
      {wishlist ? <WishlistedProducts></WishlistedProducts> : null}
    </div>
  );
};

export default Dashboard;
