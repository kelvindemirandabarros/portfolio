'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Components:
import { TypeAnimation } from 'react-type-animation';

const WAITING_TIME = 1000; // Em milissegundos (ms).
const TYPING_SEQUENCE = [
  'Desenvolvedor Frontend',
  WAITING_TIME,
  'Desenvolvedor Mobile',
  WAITING_TIME,
  'Desenvolvedor Backend',
  WAITING_TIME,
  'Desenvolvedor Full-Stack',
  WAITING_TIME,
  'React.js / Next.js',
  WAITING_TIME,
  'React Native',
  WAITING_TIME,
  'Node.js',
  WAITING_TIME
];
const IMAGE_SIZE = 150;

export function ProfileSection() {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='col-span-7 place-self-center text-center sm:text-left'
        >
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600'>{`Olá, Kelvin aqui...`}</span>
          </h1>

          <span aria-hidden='true'>
            <TypeAnimation
              sequence={TYPING_SEQUENCE}
              wrapper='span'
              speed={50}
              repeat={Infinity}
              style={{
                fontSize: '1.5em',
                display: 'inline-block',
                marginBottom: '12px'
              }}
            />
          </span>
          <span className='sr-only'>
            Desenvolvedor Full-Stack: Frontend, Mobile, Backend, React.js,
            Next.js, React Native, Node.js
          </span>

          <p className='text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl'>
            {
              'Aqui você encontra minhas experiências de desenvolvimento web (backend, frontend e mobile), juntamente com meu projeto pessoal (que não é código aberto).'
            }
          </p>

          <div>
            <a
              href='https://www.linkedin.com/in/kelvindemirandabarros/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Abrir perfil no LinkedIn'
              className='inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-linear-to-br from-blue-500 to-purple-500 hover:brightness-110 text-white focus:outline-none focus:ring text-center'
            >
              LinkedIn
            </a>

            <a
              href='/curriculo_kelvin_de_miranda_barros.pdf'
              download='curriculo_kelvin_de_miranda_barros.pdf'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Baixar currículo'
              className='inline-block p-0.75 w-full sm:w-fit rounded-full bg-linear-to-br from-blue-500 to-purple-500 mt-3 hover:brightness-110 focus:outline-none focus:ring'
            >
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white text-center'>
                Baixar Currículo
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='col-span-5 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full bg-[#181818] w-50 h-50 lg:w-50 lg:h-50 relative'>
            <Image
              src='https://github.com/kelvindemirandabarros.png'
              alt='Kelvin de Miranda Barros'
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              priority
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
