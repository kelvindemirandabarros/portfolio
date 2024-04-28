'use client';
import React, { useState, useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectTag } from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projects_data = [
  {
    id: 1,
    title: 'Backend Node.js com Express.js e MongoDB',
    description: 'Este é o backend do meu app.',
    image: '/images/projects/ep/package-json.jpeg',
    tags: ['all', 'backend'],
    page_url: '/ep/backend'
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

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        Meus projetos
      </h2>

      <div className='text-white flex flex-col sm:flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          name='Tudo'
          tag='all'
          on_click={handle_tag_change}
          is_selected={tag === 'all'}
        />

        <ProjectTag
          name='Backend'
          tag='backend'
          on_click={handle_tag_change}
          is_selected={tag === 'backend'}
        />

        <ProjectTag
          name='Frontend'
          tag='frontend'
          on_click={handle_tag_change}
          is_selected={tag === 'frontend'}
        />

        <ProjectTag
          name='Mobile'
          tag='mobile'
          on_click={handle_tag_change}
          is_selected={tag === 'mobile'}
        />
      </div>

      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filtered_projects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={is_in_view ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              img_url={project.image}
              page_url={project.page_url}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
