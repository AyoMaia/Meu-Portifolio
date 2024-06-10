'use client'

import Image from 'next/image'
import Projects from './components/Projects';
import Htmllogo from './components/htmllogo';
import { motion } from 'framer-motion';
import About from './pages/about/page';

//COMPONENTS

import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Skills from './components/Skills';
import Contact from './components/Form';


export default function Home() {



  return (
    <main className='h-4/5 bg-black'>

      <Hero />
      <Projects />
      <Skills />
      <AboutUs />
      <Contact />

    </main>
  );
}
