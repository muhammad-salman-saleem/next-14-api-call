import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = ({ item,category }: any) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4 overflow-hidden">
      {item.posterURL ? (
        <Link href={`/movie/${category}/${item.id}`}>
            <Image
              src={item.posterURL.startsWith('http') ? item.posterURL : '/' + item.posterURL}
              alt={item.title || 'Movie Image'}
              width={400}
              height={200}
              className="rounded-t-lg"
            />
        </Link>
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          Image not available
        </div>
      )}
      <div className="p-5">
        <Link href={`/movies/${item.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
              {item.title || 'Movie Title'}
            </h5>
        </Link>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
          <strong>IMDB Id:</strong> {item.imdbId}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
