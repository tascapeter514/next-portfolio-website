import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
  } from '@/components/ui/navigation-menu'


const Navigation = () => {

    return(
        <NavigationMenu className='w-full bg-black text-white '>
        <NavigationMenuList className='flex-row gap-10 m-auto text-xl p-[1em] w-full max-w-[1200px] justify-end '>
          <NavigationMenuItem className='nav-menu-item-hover'>
            Home
          </NavigationMenuItem>
          <NavigationMenuItem className='nav-menu-item-hover'>
            Work
          </NavigationMenuItem>
          <NavigationMenuItem className='nav-menu-item-hover'>
            Portfolio
          </NavigationMenuItem>
          <NavigationMenuItem className='nav-menu-item-hover'>
            Contact
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

}

export default Navigation