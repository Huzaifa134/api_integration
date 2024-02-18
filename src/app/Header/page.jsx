"use client";
import React, { useEffect, useRef, useState } from "react";
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
import chatgpt from "/public/chatgpt-icon.png";
import { chatData } from "../api/Chatmain";
import Chat from "@/components/chat/chat";

const Header = () => {
  const [text, settext] = useState("");
  const [anything, setAnything] = useState(false);
  const chatContainerRef = useRef(null);

  // const [apiData, setApiData] = useState("");
  let [products, setProducts] = useState([]);
  useEffect(() => {
    if (anything) {
      settext("");
      scrollToBottom();
    } else {
      setAnything(true);
    }
  }, [products]);

  const handleSubmit = async (prompt) => {
    const url = "https://ashva.pythonanywhere.com/c";
    let tmpPromptResponse = "";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: "bhoshaga",
          sessionID: "5380694e-70fe-4ac5-94bf-82d070de4b78",
          message: prompt,
        }),
      });

      // eslint-disable-next-line no-undef
      let decoder = new TextDecoderStream();
      if (!response.body) return;
      const reader = response.body.pipeThrough(decoder).getReader();

      while (true) {
        var { value, done } = await reader.read();

        if (done) {
          console.log({ value, tmpPromptResponse, done });
          break;
        } else {
          tmpPromptResponse += value;
          // setPromptResponse(tmpPromptResponse);
        }
      }
      return tmpPromptResponse.replace("[DONE]", "");
    } catch (error) {
      console.log(error);
      return "";
    }
  };
  const getPrompt = async (prompt) => {
    let message = await handleSubmit(prompt);
    setProducts((prev) => [
      ...prev,
      {
        id: prev.length,
        user: false,
        message: message,
        datTime: getFormattedDate(),
      },
    ]);
  };

  const sendData = () => {};
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
      // chatContainerRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  };

  function handleEnter(data) {
    if (data) {
      setProducts((prev) => [
        ...prev,
        {
          id: products.length,
          user: true,
          message: data,
          datTime: getFormattedDate(),
        },
      ]);
      getPrompt(data);
    }
  }
  //   chatData()
  return (
    <div
      style={{
        margin: "0 auto",
      }}
      className="text-white justify-between w-[97%] rounded-xl bg-[#161618] flex flex-wrap max-[1220px]:justify-center  "
    >
      <div className="flex flex-col items-center mt-[40px] ml-[100px] bg-[#212125] rounded-xl custom-height p-6 w-[750px] max-[1220px]:w-[90%] max-[1220px]:ml-0">
        <div className="flex w-full justify-center ">
          <Image
            src={blue_logo}
            alt="blue Logo"
            width={18}
            height={18}
            // className="mt-12 ml-16"
          />
          {/* <h2 className=" mt-10  md:ml-96 text-xl font-bold sm:ml-60 max-[488px]:ml-5 max-[690px]:ml-32"> */}
          <h2 className="text-xl font-bold pl-3">
            AI{" "}
            <span
              className="bg-gradient-to-r from-20% from-[#ff27c3] to-[#2496ff] to-70% bg-clip-text text-transparent"
              // style={{
              //   background:
              //     "linear-gradient(90deg,#ff27c3 14.12%,#2496ff 71.08%);-webkit-background-clip: text;-webkit-text-fill-color: transparent",
              // }}
            >
              Structural Engineer
            </span>
          </h2>
        </div>

        {/*
        <div className="mt-20 ml-32 flex flex-col gap-y-10 text-sm sm:ml-20 max-[690px]:ml-10">
          <div className="flex  items-start">
            <Image src={profile} alt="profile" height={30} width={30} />
            <p className="ml-8 w-96  max-[483px]:w-[250px]">
              You are a structural engineer designing a circular 1 in thick
              steel liner with anchors around (radially). these anchors are to
              reduce compressive forces on the liner from ground loads. Can you
              give me some sources to read / design this?
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
          <p className=" max-[393px]:text-[9px] max-[393px]:ml-1 ml-5 mr-5 text-xs">
            Retaining Wall Designer{" "}
          </p>
          <Image src={db} alt="book" height={30} width={30} />
        </div> */}

        <div
          className="w-500px w-full mt-8 h-[485px] overflow-auto mb-3 no-scrollbar"
          ref={chatContainerRef}
        >
          {products.map((product) => (
            <div key={product.id}>
              {!product.user ? (
                <div className="flex items-start gap-2.5 pt-3 mr-20">
                  <Image
                    className="w-8 h-8 rounded-full"
                    src={chatgpt}
                    alt="alt"
                    width={100}
                    height={100}
                  />
                  <div className="flex flex-col  w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-[#ffeaf8] rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        Stru Bot
                      </span>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {product.datTime}
                      </span>
                    </div>

                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                      {product.message}
                    </p>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Delivered
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2.5 justify-end pt-3 ml-20">
                  <div className="flex flex-col items-start w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-[#e0f0ff] rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        You
                      </span>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {product.datTime}
                      </span>
                    </div>

                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                      {product.message}
                    </p>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Delivered
                    </span>
                  </div>
                  <Image
                    className="w-8 h-8 rounded-full"
                    src={chatgpt}
                    alt="alt"
                    width={100}
                    height={100}
                  />
                </div>
              )}
            </div>
          ))}
          {/* <div className="kuchbhi" ref={chatContainerRef}></div> */}
        </div>

        {/* <div className="flex  flex-col mt-32 pb-32 lg:ml-32 sm:ml-10  justify-center "> */}
        <div className="flex flex-col items-center w-full">
          <form
            action=""
            className="flex border-2 px-4 rounded-xl w-full h-[50px] border-[#6B0485]"
          >
            <textarea
              placeholder="Start typing..."
              type="text"
              className="bg-transparent w-full py-[10px]  border-0 focus:outline-none no-scroll-resize"
              value={text}
              onKeyDown={(e) => {
                //
                if (e.key == "Enter") {
                  if (e.shiftKey) {
                    settext(e.target.value);
                  } else {
                    settext("");
                    handleEnter(e.target.value);
                  }
                }
              }}
              onChange={(e) => {
                // console.log(e);
                settext(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                handleEnter(text);
              }}
            >
              <Image src={submit} />
            </button>
          </form>
          <p className="text-xs text-[#818181] pt-2">
            AI can make mistakes, verify all information.
          </p>
        </div>
      </div>
      {/*right side */}
      <div className="flex lg:flex-col lg:justify-center flex-wrap lg:items-start relative pt-16 mr-10 ">
        <div className="ml-10">
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

function getFormattedDate() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentDate = new Date();

  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `${month} ${day} ${year} - ${formattedHours}:${formattedMinutes} ${ampm}`;
}
