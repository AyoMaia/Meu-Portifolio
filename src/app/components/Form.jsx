'use client'

import { motion } from 'framer-motion'

export default function Form() {
    return(
        <section>
        <div><motion.h1 className='text-center text-4xl mt-8 font-bold' initial={{x:-200}} whileInView={{x:0}}transition={{duration: 0.5}}>Contact me</motion.h1></div>

        <div className='md:p-20 p-8 bg-purple-700 flex mt-10 align-center justify-center gap:2 md:gap-10  flex-wrap' >

          <motion.div className='md:w-5/12 md:m-10 m-2 flex flex-col w-4/5' initial={{x:-200}} whileInView={{x:0}}transition={{duration: 0.5}}>
            <form action="" method='post' className='flex flex-col'>
              <label className='m-1 text-xl font-semibold'>Nome</label>
              <input type="text"  name='name' placeholder='Digite seu nome' autoComplete='off' className='bg-purple-950 rounded-lg p-2'/>
              <label className='m-1 text-xl font-semibold'>Telefone</label>
              <input type="tel" placeholder='Digite seu Telefone' autoComplete='off' className='bg-purple-950 rounded-lg p-2'/>
              <label className='m-1 text-xl font-semibold'>Email</label>
              <input type="email" placeholder='Digite seu E-mail' autoComplete='off' className='bg-purple-950 rounded-lg p-2'/>
              <label className='m-1 text-xl font-semibold'>Mensagem</label>
              <textarea  placeholder='Digite sua mensagem' autoComplete='off' className='bg-purple-950 rounded-lg p-2 h-36'></textarea>
              <button type='submit' className='p-3 mt-4 bg-purple-950 rounded-lg text-2xl font-semibold hover:bg-purple-900 duration-700 '>Enviar</button>
            </form>
          </motion.div>

          <motion.div className='bg-purple-950 h-96 md:h-[440px] rounded-lg md:w-5/12 w-96 overflow-hidden flex flex-col md:m-4 m-2 md:mt-20 mt-10' initial={{x:200}} whileInView={{x:0}}transition={{duration: 0.5}}>
            <h1>IMAGE</h1>

          </motion.div>

        </div>
      </section>
    )
}