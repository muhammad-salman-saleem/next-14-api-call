import HeroSection from '@/components/HeroSection';
import Movies from '@/components/Movies';
import { NextPage } from 'next'

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return( 
  <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02'>
    {/* <HeroSection/> */}
    <Movies/>
  </main> 
);
}

export default Home