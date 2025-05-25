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
        <NavigationMenu className='w-full bg-black text-white max-md:min-h-[75px] border-1'>
        <NavigationMenuList className='flex flex-row ml-auto gap-10 text-xl p-[1em] w-full max-w-[550px] pr-[2em] max-md:hidden'>
          <NavigationMenuItem className='relative flex-1 text-xl after:absolute after:w-0 after:h-full after:bg-white after:transition-all after:duration-[350ms] transition-all duration-[350ms] after:pointer-events-none hover:after:w-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 p-[.5em] border-1 border-white-300 hover:text-black'>
            <Link href='/' className='relative z-2 flex justify-center'>Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className='relative flex-1 text-xl after:absolute after:w-0 after:h-full after:bg-white after:transition-all after:duration-[350ms] transition-all duration-[350ms] after:pointer-events-none hover:after:w-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 p-[.5em] border-1 border-white-300 hover:text-black'>
            <Link href='/projects' className='relative z-2 flex justify-center'>Projects</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className='relative flex-1 text-xl after:absolute after:w-0 after:h-full after:bg-white after:transition-all after:duration-[350ms] transition-all duration-[350ms] after:pointer-events-none hover:after:w-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 p-[.5em] border-1 border-white-300 hover:text-black'>
            <Link href='/about' className='relative z-2 flex justify-center'>About</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className='relative flex-1 text-xl after:absolute after:w-0 after:h-full after:bg-white after:transition-all after:duration-[350ms] transition-all duration-[350ms] after:pointer-events-none hover:after:w-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 p-[.5em] border-1 border-white-300 hover:text-black'>
            <Link href='/blog' className='relative z-2 flex justify-center'>Blog</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <OpenMobileNav mobileNav={mobileNav} navDispatch={dispatchNav}><HamburgerIcon/></OpenMobileNav>
        <CloseMobileNav mobileNav={mobileNav} navDispatch={dispatchNav}><CloseHamburgerIcon /></CloseMobileNav>


      </NavigationMenu>
    )

}

export default Navigation