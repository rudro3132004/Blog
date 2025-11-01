import React from "react";

export default function HotelList() {
  const hotels = [
    {
      id: 1,
      location: "Sundarbans",
      name: "Mangrove Eco Resort",
      price: 4200,
      rating: 4.6,
      description:
        "Stay near the heart of the forest with eco-friendly rooms and stunning river views. Perfect for adventure lovers.",
      image:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800", // eco forest lodge
    },
    {
      id: 2,
      location: "Cox's Bazar",
      name: "Sea Pearl Beach Resort",
      price: 5500,
      rating: 4.8,
      description:
        "Luxurious beachfront resort offering breathtaking sea views, infinity pools, and private balconies.",
      image:
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800", // beach resort
    },
    {
      id: 3,
      location: "Sylhet",
      name: "Tea Valley Resort",
      price: 3500,
      rating: 4.5,
      description:
        "Located amidst green tea gardens with peaceful surroundings and local hospitality at its best.",
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800", // countryside hotel
    },
    {
      id: 4,
      location: "Srimangal",
      name: "Green Leaf Guesthouse",
      price: 3000,
      rating: 4.3,
      description:
        "A cozy eco-stay near Lawachara Forest offering nature tours and the famous seven-layer tea.",
      image:
        "https://images.pexels.com/photos/261398/pexels-photo-261398.jpeg?auto=compress&cs=tinysrgb&w=800", // boutique stay
    },
    {
      id: 5,
      location: "Bandarban",
      name: "Hill View Resort",
      price: 4800,
      rating: 4.7,
      description:
        "Surrounded by hills and clouds, this peaceful resort provides a stunning view of Bandarban’s natural beauty.",
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800", // mountain resort
    },
    {
      id: 6,
      location: "Rangamati",
      name: "Lake Breeze Resort",
      price: 4000,
      rating: 4.4,
      description:
        "Experience lakeside serenity with boating facilities and traditional tribal cuisine.",
      image:
        "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800", // lakeside resort
    },
    {
      id: 7,
      location: "Kuakata",
      name: "Ocean View Hotel",
      price: 3700,
      rating: 4.2,
      description:
        "Wake up to the sunrise and fall asleep to the sunset in this charming seaside retreat.",
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800", // seaside hotel
    },
  ];

  return (
    <div className="w-full min-h-screen text-white py-16 px-6 lg:pt-30">
      <h1 className="text-center text-4xl font-bold text-emerald-400 mb-16">
        Popular Hotels in Bangladesh
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-emerald-500/20 transition-transform duration-300"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 space-y-3">
              <h2 className="text-2xl font-semibold text-emerald-400">
                {hotel.name}
              </h2>
              <p className="text-gray-300 text-sm">{hotel.description}</p>
              <div className="flex justify-between items-center text-gray-400">
                <span>📍 {hotel.location}</span>
                <span>⭐ {hotel.rating}</span>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-xl font-bold text-cyan-400">
                  ৳{hotel.price}/night
                </p>
                <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-semibold hover:from-cyan-500 hover:to-emerald-500 transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
