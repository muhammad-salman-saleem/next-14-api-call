"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface MovieProps {
  id: number;
  title: string;
  posterURL: string;
  imdbId: string;
}

interface MovieComponentProps {
  params: {
    id: number;
    category: string;
  };
}

const Movie: React.FC<MovieComponentProps> = ({ params }) => {
  const router = useRouter()
  const { id, category } = params;
  const [movie, setMovie] = useState<MovieProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        if (category) {
          const resp = await fetch(`https://api.sampleapis.com/movies/${category}/${id}`);
          if (resp.ok) {
            const data = await resp.json();
            setMovie(data);
          } else {
            console.error("Failed to fetch movies");
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [category, id]);

  if (!movie) {
    return (
        <>
        <div role="status" className="w-full h-screen items-center justify-center flex">
    <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>
        </>
    ); 
  }

  return (
    <>
    <div className=' fixed top-[60px] left-[50px]' onClick={() => router.back()}>
    <button type="button" className="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
    <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
    </svg>
    <span>Go back</span>
</button>
    </div>
    <div className="pt-40"></div>
    <div className='w-full items-center justify-center flex'>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4 overflow-hidden">
        {movie.posterURL ? (
            <>
              <Image
                src={movie.posterURL.startsWith('http') ? movie.posterURL : '/' + movie.posterURL}
                alt={movie.title || 'Movie Image'}
                width={400}
                height={200}
                className="rounded-t-lg"
              />
            </>
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            Image not available
          </div>
        )}
        <div className="p-5">
          <Link href={`https://www.imdb.com/title/${movie.imdbId}`} target='_blank'>
            <>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
                {movie.title || 'Movie Title'}
              </h5>
            </>
          </Link>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            <strong>IMDB Id:</strong> {movie.imdbId}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Movie;
