import React, { useState } from "react";
import { close, hamburger } from "../assets";
import { navLinks } from "../constants";
const BottomNavar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed flex flex-col-reverse bottom-10 left-1/2 w-max max-w-7xl justify-center items-center translate-x-[-50%]">
      <div
        className={`${
          toggle ? "shadow-none" : "shadow-lg"
        } hamburger-container bg-white w-max px-2 py-1 rounded-md cursor-pointer hover:scale-105 transition-all ease-linear delay-50`}
        onClick={() => setToggle(!toggle)}
      >
        <img src={`${toggle ? close : hamburger}`} alt="menu" className="h-7" />
      </div>
      <ul
        className={`${
          toggle
            ? "opacity-100 scale-100 translate-y-[-10px]"
            : "opacity-0 scale-0 translate-y-[0px]"
        } list-none flex flex-row gap-10 bg-white shadow-md px-5 py-3 rounded-lg origin-center transition-all ease-in-out delay-300`}
      >
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="text-secondary hover:text-black text-[18px] font-medium cursor-pointer"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavar;