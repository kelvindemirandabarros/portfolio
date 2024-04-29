'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { HomeModernIcon } from '@heroicons/react/24/outline';

// Components:
import { NavLink } from './NavLink';
import { MenuOverlay } from './MenuOverlay';

// Consts:
const nav_links = [
  {
    title: 'Sobre',
    href: '#about'
  },
  {
    title: 'Projetos',
    href: '#projects'
  },
  {
    title: 'Contato',
    href: '#contact'
  }
];

export function Navbar() {
  const [navbar_open, set_navbar_open] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link
          href={'/'}
          className='text-2xl md:text-5xl text-white font-semibold'
        >
          <HomeModernIcon className='h-8 w-8 ml-8' />
        </Link>

        <div className='mobile-menu block md:hidden'>
          {!navbar_open ? (
            <button
              onClick={() => set_navbar_open(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => set_navbar_open(false)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>

        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0  md:flex-row md:space-x-8 mt-0'>
            {nav_links.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbar_open ? <MenuOverlay links={nav_links} /> : <></>}
    </nav>
  );
}
