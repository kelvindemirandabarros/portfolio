import React from 'react';
import Link from 'next/link';
import { HomeModernIcon } from '@heroicons/react/24/solid';

export function HomeIcon() {
  return (
    <Link href={'/'} className='z-20'>
      <HomeModernIcon className='h-8 w-8 ml-8' />
    </Link>
  );
}
