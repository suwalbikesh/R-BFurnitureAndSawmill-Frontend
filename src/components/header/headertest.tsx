import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from "next/legacy/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavItem = ({ href, label, isActive }:{href:string,label:string,isActive:boolean}) => {
  return (
    <li className='flex flex-col items-center justify-center'>
        <Link href={href} className={`block font-semibold uppercase ${
        isActive ? 'text-white transition duration-200' : 'text-gray-500'
      } tracking-[2px] hover:text-white relative`}>
          {label}
      </Link>
          {isActive &&
          <div className='bg-gradient-to-r from-transparent via-white to-transparent w-full h-[2px] mt-2'></div>}
      </li>
  );
};

const NavItemBurgerMenu = ({ href, label, isActive }:{href:string,label:string,isActive:boolean}) => {
  return (
    <li className='flex flex-row justify-start'>
      {isActive &&
      <div className='bg-gradient-to-t from-transparent via-white to-transparent w-[2px] mr-2'></div>}
        <Link href={href} className={`block text-sm px-2 py-4 ${
                      isActive && 'my-2 text-lg text-white'
                    } transition font-semibold hover:text-white`}>
          {label}
      </Link>
      </li>
  );
};
const Header = () => {
  const router = useRouter()
  const [toggle, setToggle] = useState<Boolean>(false)
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    let activeUrl = router.asPath.split('/')[1]
    setActive(activeUrl === '' ? 'home' : activeUrl)
  }, [router])

  return (
    <header className='bg-[url(/headerbg.jpg)] bg-cover shadow-2xl'>
        <div className='container sticky px-5 py-2 top-0 flex items-center justify-between mx-auto z-20 xl:itmes-center'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='pt-2'
      >
        <div className='hover:scale-105 duration-300 flex flex-row items-center text-gray-300 gap-4 cursor-pointer'>
            <div className='relative w-[50px] h-[50px]  md:w-[70px] md:h-[70px]'>
        <Image src='/logo.png' layout='fill' alt='logo image' />
        </div>
        <span className='text-[10px] md:text-xs font-bold leading-none uppercase'>R&B Furniture And Sawmill</span></div>
      </motion.div>
      <motion.div
        initial={{ y: -500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center text-gray-50 cursor-pointer'
      >
        <ul className='hidden text-sm lg:flex items-center space-x-10'>
        <NavItem href="/" label="Home" isActive={router.pathname === '/'} />
        <NavItem href="/about" label="About" isActive={router.pathname === '/about'} />
        <NavItem href="/portfolio" label="Portfolio" isActive={router.pathname === '/portfolio'} />
        <NavItem href="/news" label="News" isActive={router.pathname === '/news'} />
        <NavItem href="/contact" label="Contact" isActive={router.pathname === '/contact'} />
        </ul>
        <div className={`${toggle && 'hidden'} lg:hidden flex items-center`}>
          <button className='outline-none' onClick={() => setToggle(prev => !prev)}>
            <svg
              className=' w-6 h-6 text-gray-500 hover:text-green-500 '
              xlinkShow='!showMenu'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
        <div className={`${!toggle && 'hidden'} lg:hidden navbar-menu relative z-50`}>
          <div className='navbar-backdrop fixed inset-0 bg-gray-900 opacity-25' onClick={() => setToggle(false)}></div>
          <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-4/6 max-w-sm py-6 px-6 backdrop-blur-md bg-black/20 text-gray-400 overflow-y-auto'>
            <div className='flex items-center mb-8'>
              <span className='mr-auto text-xl font-bold leading-none uppercase text-white'>Bikesh Suwal</span>
              <button className='navbar-close' onClick={() => setToggle(false)}>
                <svg
                  className='h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                </svg>
              </button>
            </div>
            <div>
              <ul className='font-semibold text-xl'>
                <NavItemBurgerMenu href="/" label="Home" isActive={router.pathname === '/'} />
                <NavItemBurgerMenu href="/about" label="About" isActive={router.pathname === '/about'} />
                <NavItemBurgerMenu href="/portfolio" label="Portfolio" isActive={router.pathname === '/portfolio'} />
                <NavItemBurgerMenu href="/news" label="News" isActive={router.pathname === '/news'} />
                <NavItemBurgerMenu href="/contact" label="Contact" isActive={router.pathname === '/contact'} />
              </ul>
            </div>
          </nav>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='pt-2 hidden lg:flex flex-row items-center gap-4'
      >
        <div className='flex flex-row gap-6 items-center'>
        <span className='text-lg font-bold leading-none uppercase'> <FontAwesomeIcon icon={faSearch}/></span>
        <span>|</span>
        <span className='text-lg font-bold leading-none uppercase'> <FontAwesomeIcon icon={faShoppingCart}/></span>
        <span>|</span>
        <button className='group relative bg-[url(/buttonbg.jpg)] text-sm font-bold leading-none uppercase rounded-xl px-4 py-3'>
        <div className="absolute inset-0 bg-black opacity-0 opacity-10 group-hover:opacity-20 transition-opacity  rounded-xl duration-300"></div>
        <div className='relative'>Login</div></button>
        </div>
      </motion.div>
      </div>
    </header>
  )
}

export default Header
