import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { GiPlayButton } from "react-icons/gi";

const newAnimeList = [
  { title: "Solo Leveling", image: "https://via.placeholder.com/300", year: "2024", genre: "Action" },
  { title: "Chainsaw Man", image: "https://via.placeholder.com/300", year: "2023", genre: "Horror" },
];

const animeList = [
  { title: "Attack on Titan", image: "https://via.placeholder.com/300", year: "2013", genre: "Action" },
  { title: "Demon Slayer", image: "https://via.placeholder.com/300", year: "2019", genre: "Adventure" },
  { title: "One Piece", image: "https://via.placeholder.com/300", year: "1999", genre: "Fantasy" },
];

const genres = ["Action", "Adventure", "Fantasy", "Sci-Fi", "Romance"];

export default function AnimeHome() {
  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <header className="flex justify-between items-center p-4 bg-gray-900 fixed w-full top-0 z-10 shadow-md transition-all duration-300 ease-in-out">
        <h1 className="text-3xl font-bold text-red-600">AnimeFlix</h1>
        <Input className="w-1/3 p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-in-out" placeholder="Search anime..." />
      </header>
      
      {/* Highlighted New Anime Section */}
      <section className="pt-24 pb-6">
        <h2 className="text-4xl font-bold mb-6 text-center">New Anime Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {newAnimeList.map((anime, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:shadow-xl"
            >
              <img src={anime.image} alt={anime.title} className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 ease-in-out hover:bg-opacity-75">
                <h3 className="text-xl font-bold text-white">{anime.title}</h3>
                <p className="text-gray-300">{anime.year} - {anime.genre}</p>
                <Button className="mt-2 flex items-center gap-2 bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out">
                  <GiPlayButton className="text-lg" /> Watch Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Genre Section */}
      <section className="pb-6">
        <h2 className="text-4xl font-bold mb-6 text-center">Genres</h2>
        <div className="flex justify-center gap-4 mb-6">
          {genres.map((genre, index) => (
            <Button key={index} className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out">
              {genre}
            </Button>
          ))}
        </div>
      </section>
      
      {/* Popular Anime Section */}
      <section className="pb-6">
        <h2 className="text-4xl font-bold mb-6 text-center">Popular Anime</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {animeList.map((anime, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:shadow-xl"
            >
              <img src={anime.image} alt={anime.title} className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 ease-in-out hover:bg-opacity-75">
                <h3 className="text-xl font-bold text-white">{anime.title}</h3>
                <p className="text-gray-300">{anime.year} - {anime.genre}</p>
                <Button className="mt-2 flex items-center gap-2 bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out">
                  <GiPlayButton className="text-lg" /> Watch Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Live Streaming Section */}
      <section className="pb-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Live Streaming</h2>
        <div className="flex justify-center">
          <iframe
            className="w-full max-w-4xl h-96 border-2 border-red-600 rounded-lg"
            src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
            title="Live Anime Stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
