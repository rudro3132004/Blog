import React from 'react'
import { TbWorldPin } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Booking() {
  return (
    <div className="w-full mt-10 px-4 lg:px-0 py-5 lg:py-20">
      <div className="lg:max-w-[75%]  mx-auto flex flex-col lg:flex-row gap-3">

        {/* LEFT SIDE CONTENT */}
        <div className="w-full lg:w-2/6 flex flex-col justify-center gap-5">
          
          {/* Booking Card */}
          <div className="bg-gradient-to-br from-black via-zinc-900 to-zinc-800 p-6 rounded-2xl text-white shadow-lg hover:shadow-2xl border border-white/10 transition-all duration-500">
            <div className="flex flex-col items-start space-y-3">
              <TbWorldPin className="text-4xl text-white/90" />

              <p className="text-2xl lg:text-3xl font-semibold leading-snug">
                Explore more to get your comfort zone
              </p>

              <p className="text-gray-300 text-sm lg:text-base">
                Book your perfect stay with us and make your journey memorable.
              </p>

              <button className="mt-4 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium rounded-full flex items-center hover:from-cyan-500 hover:to-emerald-500 transition-all duration-300">
                Booking Now 
                <IoIosArrowRoundForward className="ml-2 text-2xl" />
              </button>
            </div>
          </div>

          {/* Small Image Card */}
          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover"
              src="https://static2.tripoto.com/media/filter/tst/img/2025875/TripDocument/1601531054_these_traveling_tips_helps_me_having_hassle_free_journey.jpg"
              alt="Travel Tips"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-5 text-white">
              <p className="text-lg font-medium">Articles Available</p>
              <p className="text-4xl font-bold">67</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE SECTION */}
        <div className="w-full lg:w-4/6 relative rounded-2xl overflow-hidden shadow-xl">
          <img
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-1376930-2662116.jpg&fm=jpg"
            alt="Beautiful Bangladesh"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center text-white p-6">
            <p className="max-w-2xl text-xl lg:text-3xl font-semibold leading-relaxed">
              Beyond imagination — explore the untold beauty of Bangladesh.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

