import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
//Image Slider
import sundarban from '../assets/sunderban.jpg';
import coxsbazar from '../assets/coxbazar.jpg';
import sylhet from '../assets/selettea.jpg';
import srimangal from '../assets/srimongol.jpg';
import bandarban from '../assets/bandorban.jpg';
import rangamati from '../assets/rangamati.jpg';
import kuakata from '../assets/kuakata.jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";

const slides = [
  {
    id: 1,
    location: "Sundarbans",
    content: "Explore the World's Largest Mangrove Forest",
    subcontent: "Home to the Royal Bengal Tiger and diverse wildlife, the Sundarbans offers a unique wilderness experience with its intricate river networks and lush mangrove ecosystems.",
    image: sundarban,
  },
  {
    id: 2,
    location: "Cox's Bazar",
    content: "Discover the World's Longest Natural Sea Beach",
    subcontent: "Stretching 120 kilometers along the Bay of Bengal, Cox's Bazar offers stunning sunsets, golden sands, and refreshing sea breezes that captivate every visitor.",
    image: coxsbazar,
  },
  {
    id: 3,
    location: "Sylhet",
    content: "Experience the Serene Tea Gardens",
    subcontent: "Nestled in the hills of Northeast Bangladesh, Sylhet's endless tea plantations, waterfalls, and orange gardens create a picturesque landscape of natural beauty.",
    image: sylhet,
  },
  {
    id: 4,
    location: "Srimangal",
    content: "The Tea Capital of Bangladesh",
    subcontent: "Known for its lush tea estates, Srimangal offers breathtaking landscapes, the famous Seven Color Tea, and opportunities to explore tribal communities.",
    image: srimangal,
  },
  {
    id: 5,
    location: "Bandarban",
    content: "Land of Hills and Tribal Culture",
    subcontent: "With its majestic hills, waterfalls, and diverse indigenous communities, Bandarban offers an adventurous retreat in the Chittagong Hill Tracts.",
    image: bandarban,
  },
  {
    id: 6,
    location: "Rangamati",
    content: "The Lake City of Bangladesh",
    subcontent: "Famous for Kaptai Lake, hanging bridge, and tribal villages, Rangamati offers a tranquil escape surrounded by hills and water.",
    image: rangamati,
  },
  {
    id: 7,
    location: "Kuakata",
    content: "Daughter of the Sea",
    subcontent: "Kuakata offers a rare panoramic view of both sunrise and sunset from the same beach, making it a unique coastal destination.",
    image: kuakata,
  }
];



export default function HeroSlider() {
  return (
    <div className="relative h-screen w-full bg-black">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Content Box */}
            <div className="absolute bottom-16 left-5 lg:left-20 lg:bottom-30 text-white max-w-2xl">
  `               <p className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm lg:text-base inline-block border border-white/20 tracking-wide uppercase">
                    {slide.location}
                  </p>

                  <h2 className="text-3xl lg:text-6xl font-extrabold mt-4 drop-shadow-md leading-tight">
                    {slide.content}
                  </h2>

                  <p className="mt-4 text-base lg:text-lg font-light text-gray-200 leading-relaxed">
                    {slide.subcontent}
                  </p>

                  <NavLink to={`/spot/${slide.id}`} className="mt-6 block w-fit px-6 py-3 cursor-pointer bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                    Learn More
                  </NavLink>`
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Style */}
      <style>{`
        // .swiper-pagination {
        //   height: 20px;
        //   position: absolute !important;
        //   left: 25px !important;
        //   bottom: 20px !important;
        //   text-align: left !important;
        // }

        .swiper-pagination .swiper-pagination-bullet {
          width: 16px;
          height: 16px;
          background-color: transparent;
          border: 2px solid #636e72; /* Tailwind rose-500 */
          opacity: 1;
        }

        .swiper-pagination .swiper-pagination-bullet-active {
          background-color:  #ffffff; /* Tailwind rose-500 */
          transform: scale(1.3);
          transition: transform .5s;
          opacity: 1;
        }
      `}</style>

    </div>
  );
}
