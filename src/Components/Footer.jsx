import React from 'react'
import { MdTravelExplore } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-black text-white text-center p-6 lg:p-10">

      <div className="w-full mx-auto flex flex-wrap items-start justify-evenly gap-10 lg:gap-8">

        {/* Box 1 */}
        <div className="w-full sm:w-[80%] md:w-[45%] lg:w-1/4 p-2 relative flex flex-col text-left">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold flex items-center gap-1">
              <MdTravelExplore className="text-emerald-400" />
              <a href="#" className="hover:text-emerald-400 transition">bloger.BD</a>
            </h2>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed pb-10 pr-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde dolore ex harum fugit eaque neque.
          </p>

          <div className="absolute left-2 bottom-2 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full sm:w-[80%] md:w-[45%] lg:w-1/4 flex justify-between gap-5 lg:gap-10">
          <div className="flex flex-col items-start">
            <p className="font-bold text-xl mb-3 text-emerald-400">About</p>
            <p className="hover:text-emerald-400 cursor-pointer transition">About Us</p>
            <p className="hover:text-emerald-400 cursor-pointer transition">Blog</p>
            <p className="hover:text-emerald-400 cursor-pointer transition">Career</p>
          </div>

          <div className="flex flex-col items-start">
            <p className="font-bold text-xl mb-3 text-emerald-400">Support</p>
            <p className="hover:text-emerald-400 cursor-pointer transition">Contact Us</p>
            <p className="hover:text-emerald-400 cursor-pointer transition">Return</p>
            <p className="hover:text-emerald-400 cursor-pointer transition">FAQ</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-1/4 p-2 text-left">
          <p className="font-semibold text-xl lg:text-2xl mb-4">Get Updates</p>

          <div className="p-1 border border-white/20 rounded-xl flex justify-between items-center bg-white/10 max-w-80">
            <input
              type="text"
              placeholder="Enter Email"
              className="p-2 rounded-l-md text-white bg-transparent outline-none w-3/4 placeholder-gray-300"
            />
            <button className="bg-white text-black px-3 py-2 hover:bg-rose-600 hover:text-white rounded-lg transition">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 py-5 mt-3">
            <a
              href="https://www.linkedin.com/in/rudro-boiragi-05697831b/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-500 hover:scale-110 transition-all duration-300"
            >
              <FaFacebookF className="text-white text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rudro-boiragi-05697831b/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 hover:scale-110 transition-all duration-300"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rudro-boiragi-05697831b/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-400 hover:scale-110 transition-all duration-300"
            >
              <FaTwitter className="text-white text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rudro-boiragi-05697831b/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedinIn className="text-white text-xl" />
            </a>
          </div>

          <div className="flex justify-between gap-4 text-sm mt-4 text-gray-400 max-w-80">
            <span className="hover:text-emerald-400 cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-emerald-400 cursor-pointer transition">Terms & Conditions</span>
          </div>
        </div>

      </div>
    </div>
  )
}
