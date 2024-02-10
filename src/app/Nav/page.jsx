import React from "react";

const Nav = () => {
  return (
    <div className="mb-10 text-white">
      <nav className="flex gap-x-[550px] ml-44 mt-10">
        <ul className="flex gap-x-20">
          <li>
            <a href="">S T R U</a>
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
            <a href="">Pricing</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Sign in</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
