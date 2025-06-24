'use client'
import Link from 'next/link'
import { useReducer } from 'react'
import mobileNavReducer from '@/reducers/mobileNavReducer'
import OpenMobileNav from './OpenMobileNav'
import CloseMobileNav from './CloseMobileNav'
import { HamburgerIcon, CloseHamburgerIcon } from '@/icons/about-icons/react-icons'
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
  } from '@/components/ui/navigation-menu'


const Navigation = () => {

  const [mobileNav, dispatchNav] = useReducer(mobileNavReducer, {open: false, isExiting: false})

    return(
        <NavigationMenu aria-label='Main Navigation' className='w-full bg-black text-white max-md:min-h-[75px]'>
          <NavigationMenuList className='flex flex-row ml-auto gap-10 text-xl p-[1em] w-full max-w-[550px] pr-[2em] max-md:hidden'>
            <NavigationMenuItem className='relative flex-1 text-xl after:absolute after:w-0 after:h-full after:bg-white after:transition-all after:duration-[350ms] transition-all duration-[350ms] after:pointer-events-none hover:after:w-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 p-[.5em] border-1 border-white-300 hover:text-black focus-visible:after:w-full'>
              <Link href='/' id='homeLink' aria-current='page' className='relative z-2 flex justify-center'>Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className='relative flex-1 text-xl after:absolute after:w-0 after:h-full after:bg-white after:transition-all after:duration-[350ms] transition-all duration-[350ms] after:pointer-events-none hover:after:w-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 p-[.5em] border-1 border-white-300 hover:text-black focus-visible:after:w-full'>
              <Link href='/projects' aria-current='page' className='relative z-2 flex justify-center'>Projects</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className='relative flex-1 text-xl after:absolute after:w-0 after:h-full after:bg-white after:transition-all after:duration-[350ms] transition-all duration-[350ms] after:pointer-events-none hover:after:w-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 p-[.5em] border-1 border-white-300 hover:text-black focus-visible:after:w-full'>
              <Link href='/about' aria-current='page' className='relative z-2 flex justify-center'>About</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className='relative flex-1 text-xl after:absolute after:w-0 after:h-full after:bg-white after:transition-all after:duration-[350ms] transition-all duration-[350ms] after:pointer-events-none hover:after:w-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 p-[.5em] border-1 border-white-300 hover:text-black focus-visible:after:w-full'>
              <Link href='/blog' aria-current='page' className='relative z-2 flex justify-center'>Blog</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <OpenMobileNav 
            aria-controls='mobile-navigation' 
            aria-expanded={mobileNav.open} 
            mobileNav={mobileNav} 
            navDispatch={dispatchNav}
          >
            <HamburgerIcon/>
          </OpenMobileNav>
          <CloseMobileNav 
            aria-controls='mobile-navigation' 
            aria-expanded={mobileNav.open} 
            mobileNav={mobileNav} 
            navDispatch={dispatchNav}
          >
            <CloseHamburgerIcon />
          </CloseMobileNav>
          <aside id='mobile-navigation' aria-labelledby='mobile-nav-label' className={`${mobileNav.open && !mobileNav.isExiting ? 'absolute right-[30px] top-[45px] w-full max-w-[200px] z-9999 h-fit bg-[var(--muted-foreground)] p-[3em] gap-1 border-1 border-black-300 text-3xl' : `${mobileNav.isExiting && mobileNav.open ? 'absolute right-[30px] top-[45px] w-full max-w-[200px] z-9999 h-fit bg-[var(--muted-foreground)] p-[3em] gap-1 border-1 border-black-300 text-3xl' : 'hidden'}`}`}
          >
            <h2 id="mobile-nav-label" className="sr-only">Mobile Navigation</h2>
            <ul className='p-[5%] flex flex-col gap-[1.25rem] items-center' onClick={() => mobileNav.open = false}>
              <li className='text-bold text-black'><Link href='/' aria-current='page'>Home</Link></li>
              <li className='text-bold text-black'><Link href='/projects' aria-current='page'>Projects</Link></li>
              <li className='text-bold text-black'><Link href='/about' aria-current='page'>About</Link></li>
              <li className='text-bold text-black'><Link href='/blog' aria-current='page'>Blog</Link></li>
            </ul>
          </aside>


      </NavigationMenu>
    )

}

export default Navigation