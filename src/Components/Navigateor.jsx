import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigateor() {
  return (
    <div>
      <ul className="w-fit mt-8 xl:mt-0 flex flex-col xl:flex-row justify-center items-center">
        <li className="w-full mx-2 mb-4 xl:mb-0 xl:w-fit xl:mx-4">
          <NavLink
            to="/Blog"
            className={({ isActive }) =>
              `block px-2 py-1 transition-all duration-300 ${
                isActive
                  ? "text-emerald-400 font-bold scale-110"
                  : "text-slate-200 hover:text-white hover:scale-110"
              }`
            }
          >
            Travel
          </NavLink>
        </li>

        <li className="w-full mx-2 mb-4 xl:mb-0 xl:w-fit xl:mx-4">
          <NavLink
            to="/bus-rent"
            className={({ isActive }) =>
              `block px-2 py-1 transition-all duration-300 ${
                isActive
                  ? "text-emerald-400 font-bold scale-110"
                  : "text-slate-200 hover:text-white hover:scale-110"
              }`
            }
          >
            Bus Rental
          </NavLink>
        </li>

        <li className="w-full mx-2 mb-4 xl:mb-0 xl:w-fit xl:mx-4">
          <NavLink
            to="/hotel"
            className={({ isActive }) =>
              `block px-2 py-1 transition-all duration-300 ${
                isActive
                  ? "text-emerald-400 font-bold scale-110"
                  : "text-slate-200 hover:text-white hover:scale-110"
              }`
            }
          >
            Hotel
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
