"use client"
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 first-line:md:py-0'>
      <div className='p-4 relative z-10 w-full text-center'>
<h1>Master the art of Music</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ipsa ducimus fugit corrupti, optio est natus dicta nisi quidem ex error inventore, odit et nesciunt quae dolorum quisquam dignissimos velit? Nihil harum laborum eos rem aliquid assumenda, est error deleniti reprehenderit culpa molestiae explicabo nemo sed veritatis in quis modi!</p>
<div className='mt-2'></div>
<Link href={"/courses"}> Explore Courses</Link>
      </div>
    </div>
  )
}

export default HeroSection
