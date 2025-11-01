import React from "react";
import { useParams, Link } from "react-router-dom";

// Import images
import sundarban from "../assets/sunderban.jpg";
import coxsbazar from "../assets/coxbazar.jpg";
import sylhet from "../assets/selettea.jpg";
import srimangal from "../assets/srimongol.jpg";
import bandarban from "../assets/bandorban.jpg";
import rangamati from "../assets/rangamati.jpg";
import kuakata from "../assets/kuakata.jpg";

const slides = [
  {
    id: 1,
    location: "Sundarbans",
    content: "Explore the World's Largest Mangrove Forest",
    subcontent:
      "Home to the Royal Bengal Tiger and diverse wildlife, the Sundarbans offers a unique wilderness experience with its intricate river networks and lush mangrove ecosystems.",
    description:
      "The Sundarbans, a UNESCO World Heritage Site, is the largest mangrove forest on Earth, shared between Bangladesh and India. Covering thousands of square kilometers, it is a mysterious, enchanting landscape of rivers, creeks, and tidal forests. The area is famous for the Royal Bengal Tiger, spotted deer, crocodiles, and hundreds of bird species. The local communities live in harmony with nature, relying on fishing, honey collection, and eco-tourism. Visiting the Sundarbans means exploring a unique world where land and water blend into one breathtaking ecosystem.",
    image: sundarban,
  },
  {
    id: 2,
    location: "Cox's Bazar",
    content: "Discover the World's Longest Natural Sea Beach",
    subcontent:
      "Stretching 120 kilometers along the Bay of Bengal, Cox's Bazar offers stunning sunsets, golden sands, and refreshing sea breezes that captivate every visitor.",
    description:
      "Cox’s Bazar is a gem on the southern coastline of Bangladesh and is widely known as the world’s longest natural sea beach. The rhythmic sound of waves, endless stretches of golden sand, and captivating sunsets make it one of the country’s most visited destinations. The city also offers attractions like Inani Beach, Himchari National Park, and Saint Martin’s Island. Cox’s Bazar’s growing resort culture provides luxurious stays and adventure activities such as surfing and beach biking, ensuring an unforgettable seaside escape.",
    image: coxsbazar,
  },
  {
    id: 3,
    location: "Sylhet",
    content: "Experience the Serene Tea Gardens",
    subcontent:
      "Nestled in the hills of Northeast Bangladesh, Sylhet's endless tea plantations, waterfalls, and orange gardens create a picturesque landscape of natural beauty.",
    description:
      "Sylhet, located in the northeastern region of Bangladesh, is a lush paradise of tea gardens, waterfalls, and hills. The region is home to the country’s largest tea estates and is known for its scenic beauty, clean air, and vibrant tribal culture. Must-visit sites include Jaflong, Ratargul Swamp Forest, Bichanakandi, and Lalakhal. The hospitality of the locals, combined with the tranquil landscapes, makes Sylhet one of the most peaceful destinations in the country — perfect for those seeking nature’s calm.",
    image: sylhet,
  },
  {
    id: 4,
    location: "Srimangal",
    content: "The Tea Capital of Bangladesh",
    subcontent:
      "Known for its lush tea estates, Srimangal offers breathtaking landscapes, the famous Seven Color Tea, and opportunities to explore tribal communities.",
    description:
      "Srimangal, often called the ‘Tea Capital of Bangladesh,’ is a small town surrounded by rolling hills of green tea gardens. The fresh aroma of tea leaves fills the air as visitors explore plantations and witness the traditional tea-picking process. Srimangal is also home to the famous Seven Color Tea, Lawachara National Park, and tribal villages that offer insight into Bangladesh’s diverse heritage. The calm, misty mornings and vibrant green landscapes make it a perfect spot for eco-tourists and photographers alike.",
    image: srimangal,
  },
  {
    id: 5,
    location: "Bandarban",
    content: "Land of Hills and Tribal Culture",
    subcontent:
      "With its majestic hills, waterfalls, and diverse indigenous communities, Bandarban offers an adventurous retreat in the Chittagong Hill Tracts.",
    description:
      "Bandarban, one of the most scenic hill districts of Bangladesh, is a haven for adventurers and nature lovers. Covered with green hills, deep valleys, and serene rivers, it is home to numerous tribal communities including the Marma, Mru, and Bawm people. Popular attractions include Nilgiri Hill, Boga Lake, Nafakhum Waterfall, and the Golden Temple. The region’s peaceful atmosphere, coupled with its vibrant cultural diversity, offers visitors an authentic glimpse of the hill tract lifestyle.",
    image: bandarban,
  },
  {
    id: 6,
    location: "Rangamati",
    content: "The Lake City of Bangladesh",
    subcontent:
      "Famous for Kaptai Lake, hanging bridge, and tribal villages, Rangamati offers a tranquil escape surrounded by hills and water.",
    description:
      "Rangamati, known as the 'Lake City,' is surrounded by majestic hills and the blue waters of Kaptai Lake. The region offers a mix of natural beauty and cultural richness. Boat rides across the lake provide breathtaking views of the surrounding forests and tribal villages. Tourists can explore the Hanging Bridge, Shuvolong Waterfall, and tribal handicraft markets. Rangamati’s serene environment and welcoming locals make it a perfect destination for peaceful getaways and nature retreats.",
    image: rangamati,
  },
  {
    id: 7,
    location: "Kuakata",
    content: "Daughter of the Sea",
    subcontent:
      "Kuakata offers a rare panoramic view of both sunrise and sunset from the same beach, making it a unique coastal destination.",
    description:
      "Kuakata, affectionately known as the 'Daughter of the Sea,' is a stunning coastal town located in the southern part of Bangladesh. It is one of the few beaches in the world where visitors can enjoy both sunrise and sunset over the sea. The calm waves, coconut trees, and sandy shoreline create a tranquil atmosphere perfect for relaxation. Tourists also visit nearby attractions like the Fatrar Char mangrove forest and Lebur Char. Kuakata’s natural beauty and unique sunrise-to-sunset experience make it a hidden treasure of the Bay of Bengal.",
    image: kuakata,
  },
];

export default function TourSpotDetails() {
  const { id } = useParams();
  const spot = slides.find((item) => item.id === parseInt(id));

  if (!spot) {
    return (
      <div className="text-center text-red-500 py-10 text-xl pb-10">
        Spot not found.
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 text-white pb-16 overflow-x-hidden">
      {/* 🔙 Back Button */}
      <Link
        to="/"
        className="fixed top-20 left-3 z-50 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white shadow-lg hover:scale-105 transition-transform duration-300"
      >
        ← Back
      </Link>

      {/* 🖼 Header Image */}
      <div className="relative w-full h-[75vh] overflow-hidden">
        <img
          src={spot.image}
          alt={spot.location}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold mb-3">{spot.location}</h1>
          <p className="text-lg text-gray-200 max-w-2xl px-6">{spot.content}</p>
        </div>
      </div>

      {/* 📜 Main Content */}
      <div className="max-w-5xl mx-auto px-6 mt-12 space-y-6">
        <h2 className="text-2xl font-semibold text-emerald-400">
          {spot.subcontent}
        </h2>

        <p className="text-gray-300 leading-relaxed text-justify">
          {spot.description}
        </p>
      </div>
    </div>
  );
}

