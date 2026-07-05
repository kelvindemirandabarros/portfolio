import React from 'react';

// Components:
import { HomeIcon } from './HomeIcon';

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-b-[#33353F]  border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex justify-between'>
        <HomeIcon />

        <p className='text-slate-600'>Todos os direitos reservados. ©</p>
      </div>
    </footer>
  );
};

export default Footer;
