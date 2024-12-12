import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 bg-slate-900 shadow-md sticky top-0 z-50">
      <nav className=" mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-extrabold text-white">
          <NavLink to={"/"} className="hover:text-cyan-600">
            HOME
          </NavLink>
        </div>
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `relative text-lg font-medium after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full  ${
                  isActive
                    ? "text-cyan-300 after:bg-cyan-300"
                    : "text-white hover:text-cyan-300"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/register"}
              className={({ isActive }) =>
                `relative text-lg font-medium after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full ${
                  isActive
                    ? "text-cyan-300 after:bg-cyan-300"
                    : "text-white hover:text-cyan-300"
                }`
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                `relative text-lg font-medium after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full ${
                  isActive
                    ? "text-cyan-300 after:bg-cyan-300"
                    : "text-white hover:text-cyan-300"
                }`
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
