"use client";
import React, { useState } from "react";
import PricingCard from "../component/PricingCard/page";

const Price = () => {
  const [active, setActive] = useState(null);

  const handleButtonClick = (id) => {
    setActive(id);
  };
  return (
    <div className="text-white">
      <div className="flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-center lg:items-center  md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center">
        <h1 className="text-5xl font-bold mb-5 mt-5 text-center ">
          Work Faster.{" "}
          <span
            className="bg-gradient-to-r from-20% from-[#ff27c3] to-[#2496ff] to-70% bg-clip-text text-transparent"
            // style={{
            //   background:
            //     "linear-gradient(90deg,#ff27c3 14.12%,#2496ff 71.08%);-webkit-background-clip: text;-webkit-text-fill-color: transparent",
            // }}
          >
            {" "}
            Pay Less.
          </span>
        </h1>
        <p className="w-80 text-center mb-7">
          Start with a free plan or try any plan with a 14-day money back
          guarantee!
        </p>
      </div>

      <div
        className="flex justify-center  items-center gap-x-10 text-sm border-2 rounded-[50px] w-[330px] h-15"
        style={{ margin: "0 auto" }}
      >
        <button
          className="p-3 pl-7 pr-7 rounded-3xl"
          onClick={() => handleButtonClick(1)}
          style={{ backgroundColor: active == 1 ? "#212124" : "transparent" }}
        >
          Annaly{" "}
          <span
            className="bg-gradient-to-r from-15% from-[#ff27c3] to-[#2496ff] to-70% bg-clip-text text-transparent"
            // style={{
            //   background:
            //     "linear-gradient(90deg,#ff27c3 14.12%,#2496ff 71.08%);-webkit-background-clip: text;-webkit-text-fill-color: transparent",
            // }}
          >
            Save 20%
          </span>
        </button>
        <button
          className="p-3 pl-7 pr-7 rounded-3xl"
          onClick={() => handleButtonClick(2)}
          style={{ backgroundColor: active == 2 ? "#212124" : "transparent" }}
        >
          Monthly
        </button>
      </div>
      <PricingCard />
    </div>
  );
};

export default Price;
