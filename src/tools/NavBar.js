import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='backdrop-blur-xl h-14 bg-slate-500'>
      <div className='container mx-auto px-4 py-3 relative z-10 flex items-center justify-between'>
        <div className='text-white'>
          <Link className='text-xl font-semibold' to="/">LOGO</Link>
        </div>
        <div className='md:hidden'>
          <button
            className='text-gray-400 hover:text-white focus:outline-none focus:text-white'
            onClick={toggleMenu}
          >
            <svg className='h-6 w-6 fill-white text-white' stroke='currentColor'>
              {isOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>
        <div className='hidden md:flex space-x-4'>
          <Link className='text-white hover:text-gray-300' to="/">Home</Link>
          <Link className='text-white hover:text-gray-300' to="/about">About</Link>
          <Link className='text-white hover:text-gray-300' to="/contact">Contact</Link>
        </div>
      </div>
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{
          x: '100%',
          top: 0,
        }}
        animate={{
          x: isOpen ? 0 : '-150%',
          top: isOpen ? '0' : 'auto',
        }}
        transition={{ type: 'spring', bounce: 0.5, duration: 0.6 }}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 relative z-0 backdrop-blur-md bg-slate-400 '>
          <Link className='block px-3 py-2 relative right-12 text-right rounded-full text-base font-black text-white hover:bg-gray-700' to="/">Home</Link>
          <Link className='block px-3 py-2 relative right-12 text-right rounded-full text-base font-black text-white hover:bg-gray-700' to="/about">About</Link>
          <Link className='block px-3 py-2 relative right-12 text-right rounded-full text-base font-black text-white hover:bg-gray-700' to="/contact">Contact</Link>
        </div>
      </motion.div>
    </nav>
  );
}

export default NavBar;
