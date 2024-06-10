'use client'

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="flex justify-center items-center md:gap-36 gap-8 flex-wrap ">

        <div className='flex justify-center items-center flex-col'>

          <motion.div className="div" initial={{x:-250}} whileInView={{x:0}} transition={{duration:0.2}}>
            <h1 className='font-bold text-5xl -ml-10'>I'm <span className="text-red-700">Diogo</span> Maia</h1>
          </motion.div>

          <motion.p className="font-lg w-96 mt-8 " initial={{ x: -250 }} whileInView={{ x: 0 }} transition={{duration: 0.2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, tempore. Quidem sed autem vero id aliquam provident atque architecto. Suscipit architecto cumque delectus reprehenderit assumenda nostrum, accusantium excepturi quam necessitatibus?</motion.p>

          <div className='-ml-6'>

            <motion.button className='mt-4 mr-4 bg-purple-700 px-16 py-4 rounded-lg border-solid border-purple-900 hover:bg-purple-950 duration-700'
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{duration: 0.2}}
            >Contact</motion.button>

            <motion.button className='border-solid border-2 border-purple-700 py-4 px-6 rounded-lg hover:bg-purple-700 duration-700'
            initial={{ x: -250 }}
            whileInView={{ x: 0 }}
            transition={{duration: 0.1}}>
              View Portifolio</motion.button>

          </div>
        </div>

        <div>
          <motion.img src="/images/perfil.jpg" alt="perfil" className='w-96' 
           initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
           transition={{duration: 0.4}}/>
        </div>
        
      </section>
    )
}