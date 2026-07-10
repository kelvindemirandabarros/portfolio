'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Components:
import { ProjectCard } from './ProjectCard';
import { ProjectTag } from './ProjectTag';

// Interfaces:
import { ProjectTagId } from '../../types/ProjectTag';

const projects_data = [
  {
    id: 1,
    title: 'API REST para aplicativo mobile',
    description:
      'Backend Node.js completo com testes automatizados para meu app mobile pessoal — autenticação JWT, integração com MongoDB e arquitetura escalável em Node.js. Veja a documentação da API e decisões de arquitetura.',
    image_url: '/images/projects/busca-tudo/backend/package-json.jpeg',
    tags: ['all', 'backend'],
    page_url: '/busca-tudo/backend'
  }
];

const PROJECT_TAGS: { id: number; name: string; tag: ProjectTagId }[] = [
  {
    id: 1,
    name: 'Tudo',
    tag: 'all'
  },
  {
    id: 2,
    name: 'Backend',
    tag: 'backend'
  },
  {
    id: 3,
    name: 'Frontend',
    tag: 'frontend'
  },
  {
    id: 4,
    name: 'Mobile',
    tag: 'mobile'
  }
];

export function ProjectsSection() {
  const [tag, set_tag] = useState('all');
  const ref = useRef(null);
  const is_in_view = useInView(ref, { once: true });

  const handle_tag_change = (new_tag: string) => {
    set_tag(new_tag);
  };

  const filtered_projects = projects_data.filter((project) =>
    project.tags.includes(tag)
  );

  const card_variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-8'>
        Meus projetos
      </h2>

      <div className='text-white flex flex-col sm:flex-row justify-center items-center gap-2 py-6'>
        {PROJECT_TAGS.map((project_tag) => (
          <ProjectTag
            key={project_tag.id}
            name={project_tag.name}
            tag={project_tag.tag}
            on_click={handle_tag_change}
            is_selected={tag === project_tag.tag}
          />
        ))}
      </div>

      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filtered_projects.length > 0 ? (
          filtered_projects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={card_variants}
              initial='initial'
              animate={is_in_view ? 'animate' : 'initial'}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                img_url={project.image_url}
                page_url={project.page_url}
              />
            </motion.li>
          ))
        ) : (
          <p className='col-span-full text-center text-[#adb7be]'>
            Ainda não tenho projetos nessa categoria — em breve!
          </p>
        )}
      </ul>
    </section>
  );
}
