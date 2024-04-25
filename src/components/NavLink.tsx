import React from 'react';
import Link from 'next/link';

interface NavLinkInterface {
  href: string;
  title: string;
}

export function NavLink({ href, title }: NavLinkInterface) {
  return (
    <Link
      href={href}
      className='block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounder md:p-0 hover:text-white'
    >
      {title}
    </Link>
  );
}
