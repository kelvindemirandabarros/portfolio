import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav>
      <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
        <Link href={'/'} className='text-5xl text-white font-semibold'>
          Logo
        </Link>

        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul>
            <li>
              <Link
                href={'#about'}
                className='block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounder md:p-0 hover:text-white'
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
