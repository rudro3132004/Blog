import React from "react";
import { motion } from "framer-motion";

// 🚌 Bus Rent Data
const busRentData = [
  {
    id: 1,
    from: "Dhaka",
    to: "Sundarbans",
    distance: "340 km",
    duration: "8 hours",
    price: 1500,
    busType: "AC Sleeper",
    image: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg",
    description:
      "Travel from Dhaka to the majestic Sundarbans by comfortable AC coach. Enjoy a scenic journey through green fields and rivers before entering the gateway to the world's largest mangrove forest.",
  },
  {
    id: 2,
    from: "Dhaka",
    to: "Cox's Bazar",
    distance: "390 km",
    duration: "10 hours",
    price: 1800,
    busType: "AC Luxury",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    description:
      "A long yet comfortable journey from Dhaka to Cox's Bazar, the world’s longest sea beach. Modern AC buses offer reclining seats, onboard Wi-Fi, and entertainment for a relaxing trip.",
  },
  {
    id: 3,
    from: "Dhaka",
    to: "Sylhet",
    distance: "240 km",
    duration: "6 hours",
    price: 1200,
    busType: "AC Business Class",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
    description:
      "Travel through scenic highways and green landscapes from Dhaka to Sylhet. Comfortable buses with smooth rides make it the perfect choice for nature and tea garden lovers.",
  },
  {
    id: 4,
    from: "Dhaka",
    to: "Srimangal",
    distance: "200 km",
    duration: "5 hours",
    price: 1000,
    busType: "Non-AC Coach",
    image: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg",
    description:
      "A peaceful and affordable ride from Dhaka to Srimangal — the tea capital of Bangladesh. Enjoy the green countryside and small towns along the way.",
  },
  {
    id: 5,
    from: "Dhaka",
    to: "Bandarban",
    distance: "320 km",
    duration: "9 hours",
    price: 1600,
    busType: "AC Sleeper",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/77/22/14/amiakhum.jpg?w=1200&h=700&s=1",
    description:
      "Head to the hills! This route from Dhaka to Bandarban offers breathtaking mountain views as you approach the serene hill tracts of Bangladesh.",
  },
  {
    id: 6,
    from: "Dhaka",
    to: "Rangamati",
    distance: "310 km",
    duration: "8 hours",
    price: 1500,
    busType: "AC Deluxe",
    image: "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg",
    description:
      "A comfortable ride from Dhaka to the Lake City — Rangamati. Enjoy hill views and lakeside serenity as you travel through scenic landscapes.",
  },
  {
    id: 7,
    from: "Dhaka",
    to: "Kuakata",
    distance: "390 km",
    duration: "9 hours",
    price: 1700,
    busType: "AC Express",
    image: "https://images.pexels.com/photos/1412235/pexels-photo-1412235.jpeg",
    description:
      "Experience a coastal journey from Dhaka to Kuakata — the Daughter of the Sea. Comfortable AC buses ensure a smooth trip to this rare sunrise-sunset beach.",
  },
];

export default function BusRentCardBox() {
  return (
    <div className="min-h-screen py-16 lg:pt-40 px-5 text-white">
      <h1 className="text-4xl font-bold text-center mb-12 text-emerald-400">
        Dhaka to Tourist Destination Bus Rent
      </h1>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {busRentData.map((bus) => (
          <motion.div
            key={bus.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-zinc-700 hover:border-emerald-500 transition-all"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={bus.image}
                alt={bus.to}
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex justify-center items-center opacity-0 hover:opacity-100 transition-all">
                <p className="text-emerald-400 font-semibold text-lg">
                  {bus.busType}
                </p>
              </div>
            </div>

            <div className="p-5 space-y-2">
              <h2 className="text-xl font-bold text-white">
                {bus.from} → {bus.to}
              </h2>
              <p className="text-gray-400 text-sm">
                {bus.distance} • {bus.duration}
              </p>
              <p className="text-gray-300 text-sm">{bus.description}</p>

              <div className="flex justify-between items-center mt-4">
                <p className="text-emerald-400 font-bold text-lg">
                  ৳ {bus.price}
                </p>
                <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full hover:from-cyan-500 hover:to-emerald-500 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
