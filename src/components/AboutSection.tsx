'use client';

import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Components:
import { TabButton } from './TabButton';

interface TabDataItemInterface {
  title: string;
  id: string;
  content: React.JSX.Element;
}

const TAB_DATA: TabDataItemInterface[] = [
  {
    title: 'Habilidades',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>Backend Node.js - Express.js, Fastify</li>
        <li>Banco de Dados MongoDB, MySQL</li>
        <li>Mobile React Native</li>
        <li>Frontend React.js / Next.js</li>
      </ul>
    )
  },
  {
    title: 'Educação',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>
          {
            'Análise e Desenvolvimento de Sistemas - Faculdade Estácio de Sá (em curso)'
          }
        </li>
      </ul>
    )
  },
  {
    title: 'Certificações',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>
          <a
            href='https://coodesh.com/share/certificate/c0a126c0-de1c-11ec-9234-994fd6a47798'
            target='_blank'
          >
            <u>Certificado Node.js</u>
          </a>
        </li>
      </ul>
    )
  }
];

export function AboutSection() {
  const [tab, set_tab] = useState('skills');
  const [is_pending, start_transition] = useTransition();

  const handle_tab_change = (id: string) => {
    start_transition(() => {
      set_tab(id);
    });
  };

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.4 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            alt='Imagem de uma mesa com um computador, vários acessórios de escritório e dispositivos eletrônicos, e algumas prateleiras na parede com objetos diversos.'
            src='/images/about_image.png'
            width={500}
            height={500}
            style={{ borderRadius: 20 }}
          />
        </motion.div>

        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.4 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='mt-4 md:mt-0 text-left flex flex-col h-full'
        >
          <h2 className='text-4xl font-bold text-white mb-4'>Sobre mim</h2>

          <p className='text-base lg:text-lg'>
            Sou um desenvolvedor web backend, estudando para ser full stack. Eu
            tenho experiencia trabalhando com Node.js, Express.js, MongoDB,
            React, JavaScript, TypeScript, HTML, CSS e Git. Eu aprendo rápido e
            estou sempre buscando expandir meu conhecimento e conjunto de
            habilidades.
          </p>

          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              select_tab={() => handle_tab_change('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Habilidades{' '}
            </TabButton>

            <TabButton
              select_tab={() => handle_tab_change('education')}
              active={tab === 'education'}
            >
              {' '}
              Educação{' '}
            </TabButton>

            <TabButton
              select_tab={() => handle_tab_change('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certificações{' '}
            </TabButton>
          </div>

          <div className='mt-8'>
            {TAB_DATA.find((item) => item.id === tab)?.content}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
