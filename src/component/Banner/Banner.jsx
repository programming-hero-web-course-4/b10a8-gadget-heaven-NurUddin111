import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#9538E2] pt-5 pb-56 mx-5">
        <div className="space-y-5">
          <h1 className="text-5xl text-white text-center ">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-white text-center font-extralight">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <div className="flex justify-center">
            <button className="bg-white rounded-full px-5 py-2 flex items-center justify-center text-xl font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-lg -mt-52 relative">
        <div className="flex justify-center items-center border-white border-2 p-3 rounded-lg w-[53rem] h-[25rem] shadow-slate-600 shadow-md">
          <img
            className="w-full h-full rounded-lg"
            src="https://i.ibb.co.com/x7DDzq2/banner.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
