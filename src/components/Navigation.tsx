import Link from 'next/link'

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
  } from '@/components/ui/navigation-menu'

  // className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '

const Navigation = () => {

    return(
        <NavigationMenu className='w-full bg-black text-white '>
        <NavigationMenuList className='flex flex-row ml-auto gap-10 text-xl p-[1em] w-full max-w-[550px] pr-[2em]'>
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
      </NavigationMenu>
    )

}

export default Navigation