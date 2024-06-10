'use client'

import Link from 'next/link'
import { motion } from 'framer-motion';


export default function Projects() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section>
        <div>
            <motion.h1 initial={{ scale: 0 }}whileInView={{ scale: 1 }}transition={{duration: 0.5}}className='text-center text-4xl mt-8 font-bold'>Discover My Projects</motion.h1>
        </div>

      <main className=' p-20' >

        <div className='text-center bg-purple-950 p-4 w-80 mt-11 rounded-lg'>
          <div className='bg-purple-700 h-60 rounded-lg'>
            Image
          </div>
          <h2 className='m-4'>Project</h2>
          <div className='m-2'>
            Description
          </div>
          <button className='bg-purple-700 p-4 m-2 rounded-lg hover:bg-purple-500 duration-700'>
            View More
          </button>
        </div>
        
      </main>
     </section>
    );
  }