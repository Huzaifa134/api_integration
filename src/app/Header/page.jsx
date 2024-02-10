import React from "react";
import Image from "next/image";
import blue_logo from "/public/blue_left.svg";
import profile from "/public/profile.svg";
import book from "/public/book.svg";
import search from "/public/search.svg";
import db from "/public/server.svg";
import plant from "/public/plant.svg";
import submit from "/public/submit.svg";
import upload from "/public/upload.svg";
const Header = () => {
  return (
    <div
      style={{ backgroundColor: "#161618", width: "97%", margin: "0 auto" }}
      className="text-white  rounded-xl "
    >
      <div className="flex ">
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
                "linear-gradient(90deg,#ff27c3 14.12%,#2496ff 71.08%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;",
            }}
          >
            Structural Engineer
          </span>
        </h2>
      </div>

      <div className="mt-20 ml-32 flex flex-col gap-y-10 text-sm">
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
      </div>

      <div className="flex justify-center items-center rounded border-2 border-white w-64 p-3 ml-48">
        <p className="ml-5 mr-5 text-xs">Retaining Wall Designer </p>
        <Image src={db} alt="book" height={30} width={30} />
      </div>

      <div className="flex  flex-col mt-32 pb-32 ml-32 justify-center ">
        <form action="" className="flex border-2 rounded w-[600px] h-[50px] ">
          <input
            placeholder="Start typing..."
            type="text"
            className="bg-transparent w-[550px] p-5 border-0 focus:outline-none "
          />
          <button type="submit">
            <Image src={submit} alt="submit" />{" "}
          </button>
        </form>
        <p className="text-xs ml-[200px]">
          AI can make mistakes, verify all information.
        </p>
      </div>

      {/*right side */}
      <div>
        <Image src={upload} alt="upload" height={20} width={20} />
        <p>Upload Documents to process</p>
        
      </div>
    </div>
  );
};

export default Header;
