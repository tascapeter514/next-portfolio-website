import Link from 'next/link'

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
  } from '@/components/ui/navigation-menu'


const Navigation = () => {

    return(
        <NavigationMenu className='w-full bg-black text-white '>
        <NavigationMenuList className='flex-row gap-10 m-auto text-xl p-[1em] w-full max-w-[1200px] justify-end '>
          <NavigationMenuItem className='nav-menu-item-hover'>
            <Link href='/' className='text-xl'>Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className='nav-menu-item-hover'>
            <Link href='/projects' className='text-xl'>Projects</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className='nav-menu-item-hover'>
            <Link href='/about' className='text-xl'>About</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className='nav-menu-item-hover'>
            <Link href='/blog' className='text-xl'>Blog</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

}

export default Navigation