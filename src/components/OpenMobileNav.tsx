import { Dispatch } from 'react';
import { MobileNavAction, MobileNavState } from '@/lib/types';



interface Props {
    mobileNav: MobileNavState,
    navDispatch: Dispatch<MobileNavAction>,
    children: React.ReactNode

}
// max-md:h-[40px] max-md:w-[100px]
const OpenMobileNav = ({mobileNav, navDispatch, children}: Props) => {


    return(
            <button 
                className={`md:hidden max-md:absolute max-md:top-[10px] max-md:right-[10px] max-md:bg-transparent max-md:cursor-pointer max-md:border-0 max-md:w-[35px] ${mobileNav.open ? 'hidden' : ''}`} 
                onClick={() => navDispatch({type: 'OPEN_MOBILE_NAV', payload: true})}
            >
                {children}
            </button>  
    )

}

export default OpenMobileNav