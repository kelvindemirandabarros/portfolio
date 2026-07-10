'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  ShieldCheckIcon,
  CircleStackIcon,
  CloudArrowUpIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

// Components:
import { Navbar } from '@/components/Navbar';

SyntaxHighlighter.registerLanguage('yaml', yaml);

const plex_mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono'
});

const plex_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans'
});

const BOOT_LINES = [
  '$ cat package.json',
  '> name: busca_tudo_backend',
  '> version: 1.1.0',
  '> engines: node >=24.17.0 <25.0.0',
  '> scripts: dev · build · test (jest -i)',
  '$ npm run dev',
  '✓ servidor rodando em modo development'
];

const STACK_GROUPS = [
  {
    category: 'Núcleo',
    icon: CommandLineIcon,
    items: ['Node.js', 'Express', 'TypeScript', 'MongoDB + Mongoose']
  },
  {
    category: 'Autenticação & Segurança',
    icon: ShieldCheckIcon,
    items: ['JWT', 'bcrypt', 'express-rate-limit', 'CORS']
  },
  {
    category: 'Validação',
    icon: CircleStackIcon,
    items: ['Joi', 'Zod']
  },
  {
    category: 'Comunicação & Mídia',
    icon: CloudArrowUpIcon,
    items: ['Cloudinary', 'Nodemailer', 'Axios']
  },
  {
    category: 'Documentação & DX',
    icon: DocumentTextIcon,
    items: ['Swagger UI', 'swagger-autogen', 'ESLint + Prettier']
  },
  {
    category: 'Testes & Qualidade',
    icon: BeakerIcon,
    items: ['Jest', 'Supertest', 'mongodb-memory-server', 'Faker']
  }
];

const PIPELINE_STEPS = [
  {
    title: 'Push ou Pull Request',
    description:
      'Qualquer alteração na branch main dispara o workflow do GitHub Actions automaticamente.'
  },
  {
    title: 'Instala dependências e roda o lint',
    description:
      'npm ci garante instalação determinística; o ESLint valida o padrão de código antes de qualquer teste.'
  },
  {
    title: 'Testes E2E com banco em memória',
    description:
      'mongodb-memory-server sobe um MongoDB isolado para os testes de Jest + Supertest cobrirem quase todas as rotas da API de ponta a ponta.'
  },
  {
    title: 'Build de produção',
    description:
      'tsc compila o projeto TypeScript, garantindo que nenhum erro de tipo chegue ao deploy.'
  },
  {
    title: 'Deploy',
    description:
      'Só acontece se todas as etapas anteriores passarem — sem intervenção manual.'
  }
];

const CI_WORKFLOW = `name: CI

on:
  push:
    branches: ["main", "homolog"]
  pull_request:
    branches: ["main", "homolog"]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [24.x]

    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}

      - name: Create .env file
        run: |
          touch .env
          echo ... >> .env
          echo ... >> .env
          echo ... >> .env
          ...

      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
`;

function TerminalHero() {
  const prefers_reduced_motion = useReducedMotion();

  const container_variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: prefers_reduced_motion ? 0 : 0.35,
        delayChildren: 0.2
      }
    }
  };

  const line_variants = {
    initial: { opacity: 0, y: prefers_reduced_motion ? 0 : 6 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container_variants}
      initial='initial'
      animate='animate'
      className='w-full max-w-xl rounded-xl border border-[#26324A] bg-[#0F1830]'
    >
      <div className='flex items-center gap-2 border-b border-[#26324A] px-4 py-2.5'>
        <span className='h-2 w-2 rounded-full bg-[#E3963E]' />
        <span
          className='text-xs text-[#8C9BB5]'
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Busca Tudo — Backend
        </span>
      </div>

      <div
        className='px-5 py-5 text-sm leading-relaxed'
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {BOOT_LINES.map((line, index) => (
          <motion.p
            key={index}
            variants={line_variants}
            className={
              line.startsWith('✓')
                ? 'text-[#4FD8C4]'
                : line.startsWith('$')
                  ? 'text-[#E3963E]'
                  : 'text-[#C3CCDE]'
            }
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export default function Backend() {
  const ref_stack = useRef(null);
  const is_in_view_stack = useInView(ref_stack, {
    once: true,
    margin: '-80px'
  });

  const ref_pipeline = useRef(null);
  const is_in_view_pipeline = useInView(ref_pipeline, {
    once: true,
    margin: '-80px'
  });

  return (
    <div
      className={`${plex_mono.variable} ${plex_sans.variable} min-h-screen bg-[#0D1321] text-[#EDF1F7]`}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <Navbar />

      <main className='mx-auto max-w-5xl px-6 pb-24 pt-32 sm:px-10'>
        <Link
          href='/#projects'
          className='inline-block rounded text-sm text-[#8C9BB5] hover:text-[#E3963E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3963E]'
        >
          ← Voltar para projetos
        </Link>

        {/* Hero */}
        <div className='mt-8 grid gap-10 lg:grid-cols-2 lg:items-center'>
          <div>
            <span
              className='text-xs uppercase tracking-[0.2em] text-[#E3963E]'
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Estudo de caso — Backend
            </span>

            <h1
              className='mt-4 text-4xl font-semibold leading-tight sm:text-5xl'
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Busca Tudo <span className='text-[#4FD8C4]'>API</span>
            </h1>

            <p className='mt-5 max-w-md text-base text-[#B7C1D6] sm:text-lg'>
              Backend REST em Node.js e TypeScript para o app Busca Tudo — com
              autenticação JWT, upload de imagens, e-mails transacionais e
              documentação via Swagger. Quase todas as rotas são cobertas por
              testes automatizados E2E, rodados a cada push via CI/CD no GitHub
              Actions.
            </p>
          </div>

          <TerminalHero />
        </div>

        {/* Stack */}
        <section ref={ref_stack} className='mt-24'>
          <h2
            className='text-2xl font-semibold'
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Stack técnica
          </h2>

          <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {STACK_GROUPS.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 16 }}
                  animate={is_in_view_stack ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className='rounded-lg border border-[#26324A] bg-[#121B2E] p-5'
                >
                  <Icon className='h-5 w-5 text-[#E3963E]' />

                  <h3
                    className='mt-3 text-sm uppercase tracking-wide text-[#8C9BB5]'
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {group.category}
                  </h3>

                  <ul className='mt-2 space-y-1 text-sm text-[#DCE3F0]'>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Testes & CI/CD */}
        <section ref={ref_pipeline} className='mt-24'>
          <h2
            className='text-2xl font-semibold'
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Testes E2E &amp; CI/CD
          </h2>

          <p className='mt-3 max-w-2xl text-[#B7C1D6]'>
            Cada rota nova entra acompanhada de um teste. O pipeline abaixo roda
            automaticamente a cada push — sem etapa manual entre o código e o
            deploy.
          </p>

          <ol className='mt-8 space-y-2'>
            {PIPELINE_STEPS.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -12 }}
                animate={is_in_view_pipeline ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className='flex gap-4'
              >
                <div className='flex flex-col items-center'>
                  <span
                    className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#26324A] bg-[#121B2E] text-xs text-[#E3963E]'
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {index + 1}
                  </span>

                  {index < PIPELINE_STEPS.length - 1 && (
                    <span className='mt-1 w-px flex-1 bg-[#26324A]' />
                  )}
                </div>

                <div className='pb-4'>
                  <h3 className='font-semibold text-[#EDF1F7]'>{step.title}</h3>
                  <p className='mt-1 text-sm text-[#8C9BB5]'>
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>

          <div className='mt-10 overflow-hidden rounded-lg border border-[#26324A]'>
            <div
              className='flex items-center gap-2 border-b border-[#26324A] bg-[#121B2E] px-4 py-2.5 text-xs text-[#8C9BB5]'
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <span className='h-2 w-2 rounded-full bg-[#4FD8C4]' />
              .github/workflows/ci.yml
            </div>

            <SyntaxHighlighter
              language='yaml'
              style={oneDark}
              customStyle={{
                margin: 0,
                background: '#0F1830',
                fontSize: '0.8rem',
                padding: '1.25rem'
              }}
            >
              {CI_WORKFLOW}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* Anatomia do projeto */}
        <section className='mt-24'>
          <h2
            className='text-2xl font-semibold'
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Anatomia do projeto
          </h2>

          <div className='mt-8 overflow-hidden rounded-lg border border-[#26324A]'>
            <div
              className='flex items-center gap-2 border-b border-[#26324A] bg-[#121B2E] px-4 py-2.5 text-xs text-[#8C9BB5]'
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <span className='h-2 w-2 rounded-full bg-[#E3963E]' />
              package.json
            </div>

            <div className='flex justify-center bg-[#0F1830] p-6'>
              <Image
                alt='Imagem das configurações do package.json da minha aplicação mobile de pesquisa de produtos Busca Tudo.'
                src='/images/projects/busca-tudo/backend/package-json.jpeg'
                width={500}
                height={500}
                className='rounded-md'
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
