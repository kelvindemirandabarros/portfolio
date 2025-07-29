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
              'Desenvolvedor Frontend',
              1000,
              'Desenvolvedor Mobile',
              1000,
              'Desenvolvedor Backend',
              1000,
              'Desenvolvedor Full-Stack',
              1000,
              'React.js / Next.js',
              1000,
              'React Native',
              1000,
              'Node.js',
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
              'Aqui você encontra minhas experiências de desenvolvimento web (frontend, mobile, backend, full-stack), e meu projeto pessoal em formato de blog (parte em desenvolvimento).'
            }
          </p>

          <div>
            <a
              href='https://www.linkedin.com/in/kelvindemirandabarros/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Abrir perfil no LinkedIn'
            >
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-200 text-white focus:outline-none focus:ring'>
                LinkedIn
              </button>
            </a>

            <a
              href='https://programathor.s3.sa-east-1.amazonaws.com/uploads/user/curriculum/54952/curriculo_kelvin_de_miranda_barros.pdf?X-Amz-Expires=600&X-Amz-Date=20240507T041618Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIIL73EXGLO35ED5Q%2F20240507%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=58b03ecf09688d44f8a2dfcb0ce1ced9c10b1ff1f8027073859440d1aad0dc0e'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Baixar currículo'
            >
              <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-800 text-white mt-3 focus:outline-none focus:ring'>
                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                  Baixar Currículo
                </span>
              </button>
            </a>
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
