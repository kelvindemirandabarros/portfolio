'use client';

import React, { useTransition, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

// Components:
import { TabButton } from './TabButton';

interface TabDataItemInterface {
  title: string;
  id: string;
  content: React.JSX.Element;
}

type TabId = 'experience' | 'skills' | 'education' | 'certifications';

const TAB_DATA: TabDataItemInterface[] = [
  {
    title: 'Experiência',
    id: 'experience',
    content: (
      <ul className='list-disc pl-2'>
        <li>
          2 anos XP Full-Stack - Projeto pessoal de aplicativo mobile - 06/2023
          a 07/2025
          <ul className='list-disc pl-6 mt-1'>
            <li>Mobile - React Native com Expo, Zustand, TypeScript</li>

            <li>
              Frontend - React.js e Next.js, deploy automatizado com GitHub
              Actions e Vercel
            </li>

            <li>
              Backend - Node.js com Express.js, TypeScript, JWT, MongoDB, Zod
            </li>
          </ul>
        </li>

        <br></br>

        <li>
          1 ano XP Backend - TeamSoft Tecnologia e Sistemas - 03/2022 a 03/2023
          <ul className='list-disc pl-6 mt-1'>
            <li>Node.js com Adonis.js, MySQL, AWS</li>

            <li>Arquitetura REST com autenticação JWT</li>
          </ul>
        </li>
      </ul>
    )
  },
  {
    title: 'Habilidades',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>Frontend - React.js e Next.js</li>
        <li>Mobile - React Native</li>
        <li>Backend - Node.js com Express.js, Fastify</li>
        <li>Banco de Dados - MongoDB, MySQL</li>
        <li>Versionamento - Git, GitHub</li>
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
  const [tab, set_tab] = useState<TabId>('experience');
  const [is_pending, start_transition] = useTransition();

  const ref_image = useRef(null);
  const is_in_view_image = useInView(ref_image, { once: true });

  const ref_about = useRef(null);
  const is_in_view_about = useInView(ref_about, { once: true });

  const handle_tab_change = (id: TabId) => {
    start_transition(() => {
      set_tab(id);
    });
  };

  const variants_image = {
    initial: { x: -500, opacity: 0, scale: 0.4 },
    animate: { x: 0, opacity: 1, scale: 1 }
  };

  const variants_about = {
    initial: { x: 500, opacity: 0, scale: 0.4 },
    animate: { x: 0, opacity: 1, scale: 1 }
  };

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <motion.div
          variants={variants_image}
          animate={is_in_view_image ? 'animate' : 'initial'}
          transition={{ duration: 1 }}
          ref={ref_image}
        >
          <Image
            alt='Imagem de uma mesa com um computador, vários acessórios de escritório e dispositivos eletrônicos, e algumas prateleiras na parede com objetos diversos.'
            src='/images/about_image.webp'
            width={500}
            height={500}
            style={{ borderRadius: 20 }}
          />
        </motion.div>

        <motion.div
          variants={variants_about}
          animate={is_in_view_about ? 'animate' : 'initial'}
          transition={{ duration: 1 }}
          ref={ref_about}
          className='mt-4 md:mt-0 text-left flex flex-col h-full'
        >
          <h2 className='text-4xl font-bold text-white mb-4'>Sobre mim</h2>

          <p className='text-base lg:text-lg'>
            Sou um desenvolvedor full-stack, e tenho experiência trabalhando com
            React.js e Next.js, React Native, Node.js, Express.js, MongoDB,
            JavaScript, TypeScript, HTML, CSS e Git. Aprendo rápido e estou
            sempre buscando expandir meu conhecimento e conjunto de habilidades.
          </p>

          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              select_tab={() => handle_tab_change('experience')}
              active={tab === 'experience'}
            >
              {' '}
              Experiência{' '}
            </TabButton>

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
