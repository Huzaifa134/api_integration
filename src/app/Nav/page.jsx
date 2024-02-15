import React from "react";
import Link from "next/link";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";

const Nav = () => {
  return (
    <div
      className="mb-10 text-white w-[97%] max-[570px]:w-[100%] "
      style={{ margin: "10px auto" }}
    >
      <nav className="flex   ml-44 mt-10 max-[570px]:ml-10">
        <ul className="lg:flex gap-x-20 hidden">
          <li>
            <Link href="/">S T R U</Link>
          </li>
          <li>
            <a href="">Chat</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
          <li>
            <a href="">Updates</a>
          </li>
          <li>
            <Link href="/Pricing">Pricing</Link>
          </li>
        </ul>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
                  clipRule="evenodd"
                />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <ul className="gap-y-10 flex flex-col">
                  <li>
                    <Link href="/">S T R U</Link>
                  </li>
                  <li>
                    <a href="">Chat</a>
                  </li>
                  <li>
                    <a href="">Account</a>
                  </li>
                  <li>
                    <a href="">Updates</a>
                  </li>
                  <li>
                    <Link href="/Pricing">Pricing</Link>
                  </li>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <div
        className="mr-44 max-[570px]:mr-10 mt-[-20px]"
        style={{ float: "right" }}
      >
        <a href="">Sign in</a>
      </div>
    </div>
  );
};

export default Nav;
