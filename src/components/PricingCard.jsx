import React from "react";

const PricingCard = () => {
  return (
    <div className="flex justify-center flex-wrap items-center gap-5 mt-10 mb-10">
      {/*card1*/}
      <div className="bg-[#161618] w-96 p-8 rounded-lg">
        <h1 className="text-[#FFFFFF] font-bold text-2xl ">Free</h1>
        <p className="text-sm text-[#818181] ">No Card Required</p>
        <p className="w-64 mb-5 mt-5">
          For trying out your first chat pdf experience workflow.{" "}
        </p>
        <h2 className="font-bold text-2xl">
          $0 <span className="text-sm">/mo</span>{" "}
        </h2>
        <div className="h-0.5 bg-[#818181] width-[80%] mt-5 mb-5"></div>
        <p className="text-sm font-extrabold mt-5 mb-5">WHAT’S INCLUDED</p>
        <div className="leading-8">
          <p>✓ GPT 3-5 enabled</p>
          <p>✓ For freebies and quick testing</p>
          <p>✓ Chat with 1 pdf - 10 pages max </p>
          <p>✓ Persistent pdf memory </p>
          <p>✓ Access to retrieval tool</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <button className="border-4 rounded-2xl p-3 pl-16 pr-16 font-bold border-[#818181] mt-28 ">
            Start for Free
          </button>
          <p className="text-[#818181] text-sm">No credit card required</p>
        </div>
      </div>

      {/*card2*/}
      <div className="bg-gradient-to-r from-[#6B0485] to-[#45ACFD] rounded-lg ">
        <div
          className="bg-[#161618] w-96 pl-8 pr-8 pb-8 pt-4 rounded-lg m-[2px] "
          // style={{
          //   border: "2px solid transparent",
          //   borderImage: "linear-gradient(to right, #6B0485, #45ACFD) 1",
          // }}
        >
          <div
            className="w-28 p-1 rounded-lg flex justify-center items-center float-right"
            style={{
              background: "linear-gradient(to right, #DF9913, #6B0485)",
            }}
          >
            <p className="text-sm">Most Popular</p>
          </div>
          <h1 className="text-[#B29602] font-bold text-2xl mt-10 ">Gold</h1>
          <p className="text-sm text-[#818181] ">No Card Required</p>
          <p className="w-64 mb-5 mt-5">
            For trying out your first chat pdf experience workflow.{" "}
          </p>
          <h2 className="font-bold text-2xl">
            $10 <span className="text-sm">/mo</span>{" "}
          </h2>
          <div className="h-0.5 bg-[#818181] width-[80%] mt-5 mb-5"></div>
          <p className="text-sm font-extrabold mt-5 mb-5">WHAT’S INCLUDED</p>
          <div className="leading-8">
            <p>✓ GPT 3-5 enabled</p>
            <p>✓ For freebies and quick testing</p>
            <p>✓ Chat with 1 pdf - 10 pages max </p>
            <p>✓ Persistent pdf memory </p>
            <p>✓ Access to retrieval tool</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <button
              className=" rounded-2xl p-4 pl-16 pr-16 font-bold  mt-20 "
              style={{
                background: "linear-gradient(to right, #B43AD3, #6B0485)",
              }}
            >
              Start for Free
            </button>
            <p className="text-[#818181] text-sm">No credit card required</p>
          </div>
        </div>
      </div>
      {/*card3*/}
      <div className="bg-[#161618] w-96 p-8 rounded-lg">
        <h1
          className="text-[#FFFFFF] font-bold text-2xl "
          style={{
            background:
              "linear-gradient(to right #45ACFD,#AB49C3 )1;-webkit-background-clip: text;-webkit-text-fill-color: transparent",
          }}
        >
          Pro
        </h1>
        <p className="text-sm text-[#818181] ">No Card Required</p>
        <p className="w-64 mb-5 mt-5">
          For trying out your first chat pdf experience workflow.{" "}
        </p>
        <h2 className="font-bold text-2xl">
          $0 <span className="text-sm">/mo</span>{" "}
        </h2>
        <div className="h-0.5 bg-[#818181] width-[80%] mt-5 mb-5"></div>
        <p className="text-sm font-extrabold mt-5 mb-5">WHAT’S INCLUDED</p>
        <div className="leading-8">
          <p>✓ GPT 3-5 enabled</p>
          <p>✓ For freebies and quick testing</p>
          <p>✓ Chat with 1 pdf - 10 pages max </p>
          <p>✓ Persistent pdf memory </p>
          <p>✓ Access to retrieval tool</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <button className="border-4 rounded-2xl p-3 pl-16 pr-16 font-bold border-[#818181] mt-28 ">
            Start for Free
          </button>
          <p className="text-[#818181] text-sm">No credit card required</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
