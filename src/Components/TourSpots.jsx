import React from "react";
import { motion } from "framer-motion";

import sundarban from "../assets/sunderban.jpg";
import coxsbazar from "../assets/coxbazar.jpg";
import sylhet from "../assets/selettea.jpg";
import srimangal from "../assets/srimongol.jpg";
import bandarban from "../assets/bandorban.jpg";
import rangamati from "../assets/rangamati.jpg";
import kuakata from "../assets/kuakata.jpg";
import { NavLink } from "react-router-dom";

const slides = [
  {
    id: 1,
    location: "Sundarbans",
    content: "Explore the World's Largest Mangrove Forest",
    subcontent:
      "Home to the Royal Bengal Tiger and diverse wildlife, the Sundarbans offers a unique wilderness experience with its intricate river networks and lush mangrove ecosystems.",
    image: sundarban,
  },
  {
    id: 2,
    location: "Cox's Bazar",
    content: "Discover the World's Longest Natural Sea Beach",
    subcontent:
      "Stretching 120 kilometers along the Bay of Bengal, Cox's Bazar offers stunning sunsets, golden sands, and refreshing sea breezes that captivate every visitor.",
    image: coxsbazar,
  },
  {
    id: 3,
    location: "Sylhet",
    content: "Experience the Serene Tea Gardens",
    subcontent:
      "Nestled in the hills of Northeast Bangladesh, Sylhet's endless tea plantations, waterfalls, and orange gardens create a picturesque landscape of natural beauty.",
    image: sylhet,
  },
  {
    id: 4,
    location: "Srimangal",
    content: "The Tea Capital of Bangladesh",
    subcontent:
      "Known for its lush tea estates, Srimangal offers breathtaking landscapes, the famous Seven Color Tea, and opportunities to explore tribal communities.",
    image: srimangal,
  },
  {
    id: 5,
    location: "Bandarban",
    content: "Land of Hills and Tribal Culture",
    subcontent:
      "With its majestic hills, waterfalls, and diverse indigenous communities, Bandarban offers an adventurous retreat in the Chittagong Hill Tracts.",
    image: bandarban,
  },
  {
    id: 6,
    location: "Rangamati",
    content: "The Lake City of Bangladesh",
    subcontent:
      "Famous for Kaptai Lake, hanging bridge, and tribal villages, Rangamati offers a tranquil escape surrounded by hills and water.",
    image: rangamati,
  },
  {
    id: 7,
    location: "Kuakata",
    content: "Daughter of the Sea",
    subcontent:
      "Kuakata offers a rare panoramic view of both sunrise and sunset from the same beach, making it a unique coastal destination.",
    image: kuakata,
  },
];

export default function TourSpots() {
  return (
    <div className="w-full min-h-screen text-white py-16 px-2 flex flex-col items-center lg:py-30">
      <div className="max-w-[90%] mx-auto text-center mb-10">
        
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-black font-bold mb-3"
        >
          Top Tourist Spots in Bangladesh
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Discover breathtaking destinations filled with natural beauty, culture, and adventure.
        </motion.p>
      </div>

      {/* Cards Container */}
      <div className="w-full lg:max-w-[75%] grid justify-between gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {slides.map((spot, index) => (
          <motion.div
            key={spot.id}
            initial={{ opacity: 0, scale: 0.9, y: 60, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1, type: "spring" }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              rotateX: -2,
              boxShadow: "0px 10px 30px rgba(0, 255, 200, 0.3)",
            }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden shadow-lg border border-zinc-700/40 bg-zinc-800/40 backdrop-blur-md hover:bg-zinc-800/60 transition-all duration-500"
          >
            {/* Image */}
            <img
              src={spot.image}
              alt={spot.location}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Text */}
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <p className="text-emerald-400 text-sm uppercase mb-1 tracking-wide">
                {spot.location}
              </p>
              <h3 className="text-xl font-semibold mb-2">{spot.content}</h3>
              <p className="text-gray-300 text-sm mb-3 line-clamp-3">{spot.subcontent}</p>

              <NavLink to={`/spot/${spot.id}`} className="px-5 py-2 bg-gradient-to-r cursor-pointer from-emerald-500 to-cyan-500 rounded-full text-white font-medium hover:from-cyan-500 hover:to-emerald-500 transition-all duration-300">
                Details
              </NavLink>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
