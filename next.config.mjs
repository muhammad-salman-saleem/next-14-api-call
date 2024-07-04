/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'fakeimg.pl', 
        'm.media-amazon.com',
        'ia.media-imdb.com',
      ],
    },
  };

export default nextConfig;
