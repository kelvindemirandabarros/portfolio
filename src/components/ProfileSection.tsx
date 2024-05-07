'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Components:
import { TypeAnimation } from 'react-type-animation';

export function ProfileSection() {
  const image_side = 150;

  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='col-span-7 place-self-center text-center sm:text-left'
        >
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>{`Olá, Kelvin aqui...`}</span>
          </h1>

          <TypeAnimation
            sequence={[
              'Desenvolvedor FullStack',
              1000,
              'Node.js',
              1000,
              'React.js / Next.js',
              1000,
              'React Native',
              1000
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            style={{
              fontSize: '1.5em',
              display: 'inline-block',
              marginBottom: '12px'
            }}
          />

          <p className='text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl'>
            {
              'Este portfólio tem o intuito de mostrar minhas experiências de desenvolvimento web (backend, frontend e mobile) através do meu portfólio, e do meu maior projeto pessoal (que não é código aberto), em formato de blog.'
            }
          </p>

          <div>
            <button
              className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-200 text-white'
              onClick={() => {
                window.open(
                  'https://www.linkedin.com/in/kelvindemirandabarros/',
                  '_blank'
                );
              }}
            >
              LinkedIn
            </button>

            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-800 text-white mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Baixar Currículo
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='col-span-5 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[200px] lg:h-[200px] relative'>
            <Image
              src='https://github.com/kelvindemirandabarros.png'
              alt='Kelvin de Miranda Barros'
              width={image_side}
              height={image_side}
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
