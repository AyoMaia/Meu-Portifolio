'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutUs() {
    return (
        <section id='about-section'>
        <div>
          <motion.h1 className='text-center text-4xl mt-8 font-bold' initial={{ scale: 0, x:200}}whileInView={{ scale: 1, x:0}}transition={{duration: 0.5}}>About me</motion.h1>
        </div>

        <div id='about-container' className='flex mt-10 align-center justify-center gap:10 md:gap-36  flex-wrap'>

          <motion.div className='md:w-5/12 md:m-10 m-2 md:p-20 p-2 flex flex-col w-4/5' initial={{x:-200}} whileInView={{x:0}}transition={{duration: 0.5}}>
            <h3 className='text-center my-8 text-2xl font-semibold' > Quem é Diogo Maia?</h3>
            <h4>Sou nascido em Florianópolis, Santa Catarina, e aos meus 24 anos, minha jornada profissional é marcada por uma busca incessante pela combinação perfeita entre paixão e habilidades. Após explorar diversos caminhos, encontrei meu verdadeiro chamado no curso de Análise e Desenvolvimento de Sistemas. <br /> <br />

            Desde então, mergulhei de cabeça nesse universo fascinante da tecnologia, alimentando minha paixão diariamente com estudos e dedicação. Sou motivado pela busca constante de evolução, sempre empenhado em aprimorar minhas habilidades e conhecimentos para me tornar um desenvolvedor de alto nível. <br /> <br />

            Minha trajetória é caracterizada por qualidades como paciência, pontualidade e organização, que considero fundamentais tanto no mundo da tecnologia quanto na música, minha outra grande paixão, que também cultivo nas horas vagas. <br /> <br />

            Em resumo, sou um entusiasta da tecnologia em constante crescimento, buscando alcançar meu potencial máximo como desenvolvedor. <br /> <br />
            <span className='text-red-500 text-xl'>Prazer Diogo Maia!</span>
            </h4>
          </motion.div>

          <motion.div className='md:h-screen h-4/5 rounded-lg w-4/5 overflow-hidden md:w-5/12 flex flex-col' initial={{x:200}} whileInView={{x:0}}transition={{duration: 0.5}}>
            <img src="/images/about.jpg" alt="" className='w-full'/>
          </motion.div>

        </div>

      </section>
    )

}