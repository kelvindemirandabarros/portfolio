import React from 'react';

// Components:
import { NavLink } from './NavLink';

// Interfaces:
import type { NavLinkInterface } from './NavLink';

interface MenuOverlayInterface {
  links: NavLinkInterface[];
}

export function MenuOverlay({ links }: MenuOverlayInterface) {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
