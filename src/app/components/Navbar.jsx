'use client'

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {

    const [isOpen,setIsOpen]=useState(false);

    const toggleNavbar = () => {
        console.log('toggleNavbar');
        setIsOpen(!isOpen);
    }


    return (
        <main className='header flex justify-between max-w-full items-center overflow-hidden p-6 bg-black'>

            <motion.div initial={{y:-100}} animate={{y:0}} transition={{duration:5.2}} className='items-center justify-center text-xl font-semibold text-red-700 md:text-2xl' ><h1 className='w-60'>Diogo <span>Maia</span></h1></motion.div>

            <motion.nav initial={{y:-100}} animate={{y:0}} transition={{duration:5.2}} className='nav-links  md:flex gap-10 flex md:flex-row flex-col absolute md:static top-20 md:top-0 justify-center items-center md:bg-transparent bg-purple-900 w-96 h-full left-0 md:left-6 z-10 invisible md:visible'>

                <Link href="/" className='links hover:text-red-700 md:ml-8 flex text-center' >Home</Link>
                <Link href="/pages/portifolio" className='links hover:text-red-700 flex text-center' >Portifolio</Link>
                <Link href="/pages/about" className='links hover:text-red-700 flex text-center' >About</Link>
                <Link href="/pages/contact" className='links hover:text-red-700 flex text-center' >Contact</Link>   

            </motion.nav>

            <button className='md:hidden' onClick={toggleNavbar}>{isOpen}

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </button>

            {isOpen && (

            <nav initial={{y:-100}} animate={{y:0}} transition={{duration:5.2}} className='nav-links  md:flex gap-10 flex md:flex-row flex-col absolute md:static top-20 md:top-0 justify-center items-center md:bg-transparent bg-black w-full h-96 left-0 md:left-6 z-10  md:visible'>

                <Link href="/" className='links hover:text-red-700 md:ml-8 flex text-center' onClick={toggleNavbar}>{isOpen}Home</Link>
                <Link href="/pages/portifolio" className='links hover:text-red-700 flex text-center' onClick={toggleNavbar}>{isOpen}Portifolio</Link>
                <Link href="/pages/about" className='links hover:text-red-700 flex text-center' onClick={toggleNavbar}>{isOpen}About</Link>
                <Link href="/pages/contact" className='links hover:text-red-700 flex text-center' onClick={toggleNavbar}>{isOpen}Contact</Link>   

            </nav>

            )}
        </main>
    )
}