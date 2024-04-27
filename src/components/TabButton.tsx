import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem)' }
};

interface TabButtonInterface {
  active: boolean;
  select_tab: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export function TabButton({
  active,
  select_tab,
  children
}: TabButtonInterface) {
  const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]';

  return (
    <button onClick={select_tab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>

      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className='h-1 bg-primary-500 mt-2 mr-3'
      ></motion.div>
    </button>
  );
}
