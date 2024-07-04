"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface MovieProps {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  director: string;
  actors: string[];
  plot: string;
  poster: string;
  trailer: string;
  runtime: number;
  awards: string;
  country: string;
  language: string;
  boxOffice: string;
  production: string;
  website: string;
}

const Movies = () => {
  const [moviesData, setMoviesData] = useState<MovieProps[]>([]);

  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/movies")
      .then((response) => response.json())
      .then((json) => setMoviesData(json))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <>
      <div className="pt-40"></div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {moviesData?.map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4 overflow-hidden"
          >
            {item && (
              <Link href={`#`}>
                <Image
                  src={item.poster}
                  alt={item.title || "Movie Image"}
                  width={400}
                  height={200}
                  className="rounded-t-lg"
                />
              </Link>
            )}
            <div className="p-5">
              <Link href={`movies/${item.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
                  {item.title || "Movie Title"}
                </h5>
              </Link>
              <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                <strong>Rating:</strong> {item.rating}
              </p>
              <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                <strong>Genre:</strong> {item.genre.join(", ")}
              </p>
              <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                <strong>Year:</strong> {item.year}
              </p>
              <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                <strong>Director:</strong> {item.director}
              </p>
              {item.website && (
                <Link href={item.website} target="_blank">
                  <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mt-4">
                    View Website
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
