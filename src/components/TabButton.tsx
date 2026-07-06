import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem)' }
};

interface TabButtonInterface {
  id: string;
  active: boolean;
  select_tab: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  controls: string;
}

export function TabButton({
  id,
  active,
  select_tab,
  controls,
  children
}: TabButtonInterface) {
  const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]';

  return (
    <button
      onClick={select_tab}
      role='tab'
      id={id}
      aria-selected={active}
      aria-controls={controls}
      tabIndex={active ? 0 : -1}
    >
      <span className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </span>

      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className='h-1 bg-primary-500 mt-2 mr-3'
      ></motion.div>
    </button>
  );
}
