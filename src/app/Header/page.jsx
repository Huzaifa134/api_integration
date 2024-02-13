"use client";
import React, { useState } from "react";
import Image from "next/image";
import blue_logo from "/public/blue_left.svg";
import profile from "/public/profile.svg";
import book from "/public/book.svg";
import search from "/public/search.svg";
import db from "/public/server.svg";
import plant from "/public/plant.svg";
import submit from "/public/submit.svg";
import upload from "/public/upload.svg";
import check from "/public/tick.svg";
import { chatData } from "../api/Chatmain";

const Header = () => {
  const [text, settext] = useState(null);
  const [apiData, setApiData] = useState("");

  const api = () => {
    chatreply(async (res) => {
      data = res.success;
      settext(data);
    });
  };
  const sendData=()=>{
   

  }
//   chatData()
  return (
    <div
      style={{ backgroundColor: "#161618", width: "97%", margin: "0 auto" ,justifyContent:"space-between" }}
      className="text-white  rounded-xl  flex flex-wrap  "
      
    >
    <div className="">
      <div className="flex  ">
        <Image
          src={blue_logo}
          alt="blue Logo"
          width={18}
          height={18}
          className="mt-12 ml-16"
        />
        <h2 className=" mt-10  md:ml-96 text-xl font-bold sm:ml-60 max-[488px]:ml-5 max-[690px]:ml-32">
          AI{" "} 
          <span
            style={{
                background: "linear-gradient(90deg,#ff27c3 14.12%,#2496ff 71.08%);-webkit-background-clip: text;-webkit-text-fill-color: transparent",
            }}
          >
            Structural Engineer
          </span>
        </h2>
      </div>

      <div className="mt-20 ml-32 flex flex-col gap-y-10 text-sm sm:ml-20 max-[690px]:ml-10">
        <div className="flex  items-start">
          <Image src={profile} alt="profile" height={30} width={30} />
          <p className="ml-8 w-96  max-[483px]:w-[250px]">
            You are a structural engineer designing a circular 1 in thick steel
            liner with anchors around (radially). these anchors are to reduce
            compressive forces on the liner from ground loads. Can you give me
            some sources to read / design this?
          </p>
        </div>

        <div className="flex items-center">
          <Image src={book} alt="book" height={30} width={30} />
          <p className="ml-8">Uploading filename.pdf</p>
        </div>

        <div className="flex  items-center">
          <Image src={search} alt="book" height={30} width={30} />
          <p className="ml-8">Reading file</p>
        </div>

        <div className="flex  items-center">
          <Image src={db} alt="book" height={30} width={30} />
          <p className="ml-8">server response #1</p>
        </div>

        <div className="flex items-center max-[483px]:w-[250px]">
          <Image src={plant} alt="book" height={40} width={40} />
          <p className="ml-5">
            Sure, I have added them. Here’s the link to the model:
          </p>
        </div>
      </div>

      <div className=" max-[393px]:w-[150px] flex justify-center items-center rounded border-2 border-white w-64 p-3 ml-48 max-[640px]:ml-28">
        <p className=" max-[393px]:text-[9px] max-[393px]:ml-1 ml-5 mr-5 text-xs">Retaining Wall Designer </p>
        <Image src={db} alt="book" height={30} width={30} />
      </div>

      <div className="flex  flex-col mt-32 pb-32 lg:ml-32 sm:ml-10  justify-center ">
        <form action="" className="flex border-2 rounded max-[469px]:w-[250px] sm:w-[600px] max-[690px]:w-[400px] max-[690px]:ml-10 h-[50px] ">
          <input
            placeholder="Start typing..."
            type="text"
            className="bg-transparent md:w-[550px] sm:w-[355px] max-[469px]:w-[200px] max-[690px]:w-[350px]   p-5  border-0 focus:outline-none "
            value={apiData}
            onChange={(e) => setApiData(e.target.value)}
    
           
          />
          <button type="submit">
            <Image src={submit} alt="submit" />
          </button>
        </form>
        <p className="text-xs ml-[200px] sm-ml:10 max-[690px]:ml-10">
          AI can make mistakes, verify all information.
        </p>
      </div>
      </div>
      {/*right side */}
      <div className="flex lg:flex-col lg:justify-center flex-wrap lg:items-start relative pt-16 mr-10 ">
      <div  className="ml-10">
      <Image src={upload} alt="upload" height={20} width={20}/>
        <p className="text-sm mt-5">Upload Documents to process</p>
        <div className="flex gap-y-2 flex-col">
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">ASCE 7-16.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">Tolcco_report.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">sluicegate.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
        </div>
        </div>


        <div className="mt-10 ml-10">
        <p className="text-sm">Use Preloaded Knowledge Base</p>
        <div className="flex gap-y-2 flex-col">
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">ASCE 7-16.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">Tolcco_report.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">sluicegate.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">sluicegate.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
        </div>
        </div>


        <div className="mt-10 ml-10">
        <p className="text-sm">Use Preloaded Knowledge Base</p>
        <div className="flex gap-y-2 flex-col">
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">ASCE 7-16.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">Tolcco_report.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">sluicegate.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">sluicegate.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">sluicegate.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">sluicegate.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
          <div className="bg-[#212124] flex h-[60px] max-w-64 items-center p-3 rounded-lg">
            <p className="mr-20 text-sm w-32">sluicegate.pdf</p>
            <Image src={check} alt="upload" height={30} width={30} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
