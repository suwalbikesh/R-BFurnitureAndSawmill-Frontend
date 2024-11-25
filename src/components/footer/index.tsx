import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavItem = ({ href, label, isActive }:{ href:string, label:string, isActive:boolean }) => {
  return (
    <li className='flex flex-col items-center justify-center'>
        <Link href={href} className={`block font-semibold uppercase ${
        isActive ? 'text-gray-800  transition duration-200' : 'text-gray-800'
      } tracking-[2px] hover:text-gray-500 relative`}>
          {label}
      </Link>
          {isActive &&
          <div className='bg-gradient-to-r from-transparent via-gray-500 to-transparent w-full h-[2px] mt-2'></div>}
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
    <header className='bg-[#f4e6d5] shadow-2xl mx-4 mt-4 rounded-xl'>
        <div className='container sticky px-5 py-2 top-0 flex items-center gap-6 xl:gap-4 justify-between mx-auto z-20 xl:itmes-center'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='pt-2'
      >
        <div className='hover:scale-105 duration-300 flex flex-row items-center text-gray-800 gap-4 cursor-pointer'>
            <div className='relative w-[50px] h-[50px]  md:w-[70px] md:h-[70px]'>
        <Image src='/logoDark.png' layout='fill' alt='logo image' />
        </div>
        <div className='text-[8px] md:text-sm font-bold leading-none uppercase'>R&B Furniture And Sawmill</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center cursor-pointer'
      >
        <ul className='hidden text-sm lg:flex items-center space-x-8 xl:space-x-10'>
        <NavItem href="/" label="Home" isActive={router.pathname === '/'} />
        <NavItem href="/about" label="About" isActive={router.pathname === '/about'} />
        <NavItem href="/about" label="Service" isActive={router.pathname === '#'} />
        <NavItem href="/shop" label="Shop" isActive={router.pathname === '/shop'} />
        <NavItem href="/contact" label="Contact" isActive={router.pathname === '/contact'} />
        </ul>
        <div className={`${toggle && 'hidden'} lg:hidden flex items-center`}>
          <button className='outline-none' onClick={() => setToggle(prev => !prev)}>
            <svg
              className=' w-6 h-6 text-gray-800'
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
          <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-4/6 max-w-sm py-6 px-4 sm:px-6 backdrop-blur-md bg-black/20 text-gray-400 overflow-y-auto'>
            <div className='flex flex-row gap-2 items-center mb-8 justify-between'>
                <div className='hover:scale-105 duration-300 flex flex-row items-center text-gray-800 gap-2 md:gap-4 cursor-pointer'>
                    <div className='relative w-[50px] h-[50px]'>
                        <Image src='/logo.png' layout='fill' alt='logo image' />
                    </div>
                    <div className='text-[8px] md:text-sm font-bold leading-none uppercase text-white'>R&B Furniture And Sawmill</div>
                </div>
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
                <NavItemBurgerMenu href="/about" label="About Us" isActive={router.pathname === '/about'} />
                <NavItemBurgerMenu href="/shop" label="Shop" isActive={router.pathname === '/shop'} />
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
        className=' hidden lg:flex flex-row items-center gap-4'
      >
        <div className='flex flex-row gap-4 xl:gap-6 items-center text-gray-800'>
        <span className='text-lg font-bold leading-none uppercase'> <FontAwesomeIcon icon={faSearch}/></span>
        <span>|</span>
        <div className='relative'>
        <span className='text-lg font-bold leading-none uppercase'> <FontAwesomeIcon icon={faShoppingCart}/></span>
        <span className='absolute -top-3 -right-4 text-xs font-bold leading-none uppercase border-1 rounded-full bg-[#8B4513] py-1 px-2 text-white'>0</span>
        </div>
        <span>|</span>
        <button className='group relative bg-[url(/buttonbg.jpg)] text-sm font-bold leading-none uppercase rounded-xl px-4 py-3'>
        <div className="absolute inset-0 bg-black opacity-0 opacity-50 group-hover:opacity-40 transition-opacity  rounded-xl duration-300"></div>
        <div className='relative text-white'>Login</div></button>
        </div>
      </motion.div>
      </div>
    </header>
  )
}

export default Header
