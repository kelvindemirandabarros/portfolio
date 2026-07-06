'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

// Components:
import { TabButton } from './TabButton';

interface TabDataItemInterface {
  title: string;
  id: string;
  content: React.JSX.Element;
}

type TabId = 'experience' | 'skills' | 'education';

const TAB_DATA: TabDataItemInterface[] = [
  {
    title: 'Experiência',
    id: 'experience',
    content: (
      <ul className='list-disc pl-2 space-y-4'>
        <li>
          Projeto pessoal full-stack de aplicativo mobile — desenvolvido solo,
          do design de arquitetura ao deploy em produção, com CI/CD automatizado
          via GitHub Actions
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

        <li>
          1 ano XP Backend - TeamSoft Tecnologia e Sistemas - 03/2022 a 03/2023
          <ul className='list-disc pl-6 mt-1'>
            <li>
              Desenvolvimento e manutenção de APIs para sistema da Domino's.
              Correção de bugs em produção. Desenvolvimento de novas APIs.
            </li>

            <li>
              Participação em ambiente ágil. Colaboração com equipes
              multidisciplinares (frontend).
            </li>

            <li>Node.js com Adonis.js, MySQL, AWS.</li>

            <li>Arquitetura REST com autenticação JWT.</li>
          </ul>
        </li>
      </ul>
    )
  },
  {
    title: 'Habilidades',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2 space-y-4'>
        <li>Frontend - React.js e Next.js</li>

        <li>Mobile - React Native</li>

        <li>Backend - Node.js com Express.js, Fastify</li>

        <li>Banco de Dados - MongoDB, MySQL, PostgreSQL</li>

        <li>Versionamento - Git, GitHub</li>
      </ul>
    )
  },
  {
    title: 'Formação',
    id: 'education',
    content: (
      <ul className='list-disc pl-2 space-y-4'>
        <li>Análise e Desenvolvimento de Sistemas - Descomplica Faculdade</li>

        <li>
          Inglês Intermediário (Nível B1/B2),{' '}
          <a
            href='https://www.linkedin.com/posts/kelvindemirandabarros_how-does-your-english-compare-take-this-share-7188753892090793984-jk2C/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-blue-400'
          >
            testado no site do EF SET (pontuação 75/100)
          </a>
        </li>

        <li>
          <a
            href='https://coodesh.com/share/certificate/c0a126c0-de1c-11ec-9234-994fd6a47798'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-blue-400'
          >
            Certificado Node.js
          </a>{' '}
          - Coodesh
        </li>
      </ul>
    )
  }
];

export function AboutSection() {
  const [tab, set_tab] = useState<TabId>('experience');

  const ref_section = useRef(null);
  const is_in_view = useInView(ref_section, { once: true });

  const handle_tab_change = (id: TabId) => {
    set_tab(id);
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
    <section className='text-white' id='about' ref={ref_section}>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <motion.div
          variants={variants_image}
          animate={is_in_view ? 'animate' : 'initial'}
          transition={{ duration: 1 }}
        >
          <Image
            alt='Imagem de uma mesa com um computador, vários acessórios de escritório e dispositivos eletrônicos, e algumas prateleiras na parede com objetos diversos.'
            src='/images/about_image.webp'
            width={500}
            height={500}
            className='rounded-2xl'
            loading='eager'
          />
        </motion.div>

        <motion.div
          variants={variants_about}
          animate={is_in_view ? 'animate' : 'initial'}
          transition={{ duration: 1 }}
          className='mt-4 md:mt-0 text-left flex flex-col h-full'
        >
          <h2 className='text-4xl font-bold text-white mb-4'>Sobre mim</h2>

          <p className='text-base lg:text-lg'>
            Sou desenvolvedor full-stack com experiência construindo aplicações
            web e mobile do zero — do backend em Node.js até a interface em
            React/React Native. Já levei um projeto pessoal do MVP ao deploy em
            produção, e hoje busco oportunidades para aplicar essa experiência
            em um time.
          </p>

          <div className='flex flex-row justify-start mt-8 overflow-x-auto whitespace-nowrap pb-2'>
            <TabButton
              id='tab-experience'
              controls='panel-experience'
              select_tab={() => handle_tab_change('experience')}
              active={tab === 'experience'}
            >
              {' '}
              Experiência{' '}
            </TabButton>

            <TabButton
              id='tab-skills'
              controls='panel-experience'
              select_tab={() => handle_tab_change('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Habilidades{' '}
            </TabButton>

            <TabButton
              id='tab-education'
              controls='panel-experience'
              select_tab={() => handle_tab_change('education')}
              active={tab === 'education'}
            >
              {' '}
              Educação{' '}
            </TabButton>
          </div>

          <div
            role='tabpanel'
            id={`panel-${tab}`}
            aria-labelledby={`tab-${tab}`}
            className='mt-8 grid'
          >
            {TAB_DATA.map((item) => (
              <div
                key={item.id}
                className={`col-start-1 row-start-1 transition-opacity duration-200 ${
                  tab === item.id ? 'opacity-100' : 'opacity-0 invisible'
                }`}
              >
                {item.content}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
