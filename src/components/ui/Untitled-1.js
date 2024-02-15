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
  const [apiData, setApiData] = useState("");

  const [promptArea, setPromptArea] = useState("");
  const [answer, setAnswer] = useState("");
  const [promptResponse, setPromptResponse] = useState("");

  const handleSubmit = async () => {
    const url = "https://ashva.pythonanywhere.com/c";
    var tmpPromptResponse = "";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: "bhoshaga",
          sessionID: "5380694e-70fe-4ac5-94bf-82d070de4b78",
          message: promptArea,
        }),
      });

      // eslint-disable-next-line no-undef
      let decoder = new TextDecoderStream();
      if (!response.body) return;
      const reader = response.body.pipeThrough(decoder).getReader();

      while (true) {
        var { value, done } = await reader.read();

        if (done) {
          break;
        } else {
          tmpPromptResponse += value;
          setPromptResponse(tmpPromptResponse);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{ backgroundColor: "#161618", width: "97%", margin: "0 auto" }}
      className="text-white  rounded-xl h-[1300px] flex gap-x-[430px] "
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
          <h2 className=" mt-10 ml-96 text-xl font-bold">
            AI{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg,#ff27c3 14.12%,#2496ff 71.08%);-webkit-background-clip: text;-webkit-text-fill-color: transparent",
              }}
            >
              Structural Engineer
            </span>
          </h2>
        </div>

        {/* <div className="mt-20 ml-32 flex flex-col gap-y-10 text-sm">
        <div className="flex  items-start">
          <Image src={profile} alt="profile" height={30} width={30} />
          <p className="ml-8 w-96">
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

        <div className="flex items-center">
          <Image src={plant} alt="book" height={40} width={40} />
          <p className="ml-5">
            Sure, I have added them. Here’s the link to the model:
          </p>
        </div>
      </div> */}

        <div className="w-[500px] h-[500px] mx-24 my-11 bg-white ">
          <div className="">
            <span className="text-black">{promptResponse}</span>
          </div>
        </div>

        <div className="flex  flex-col mt-32 pb-32 ml-32 justify-center ">
          {/* <form action="" className="flex border-2 rounded w-[600px] h-[50px] ">
            <input
              placeholder="Start typing..."
              type="text"
              className="bg-transparent w-[550px] p-5 border-0 focus:outline-none "
              value={promptArea}
              onChange={(e) => setPromptArea(e.target.value)}
            />
            <button onClick={handleSubmit}>
              <Image src={submit} alt="submit" />
            </button>
          </form> */}

          <textarea
            className="bg-[#054b4b]"
            rows={3}
            onChange={(e) => setPromptArea(e.target.value)}
            style={{ order: 2, marginBottom: "1rem" }}
            value={promptArea}
          ></textarea>
          <button onClick={handleSubmit}>
            <Image src={submit} alt="submit" />
          </button>

          <p className="text-xs ml-[200px]">
            AI can make mistakes, verify all information.
          </p>
        </div>
      </div>
      {/*right side */}
      <div className="flex flex-col justify-centers items-end relative pt-16">
        <div>
          <Image src={upload} alt="upload" height={20} width={20} />
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

        <div className="mt-10">
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

        <div className="mt-10">
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
