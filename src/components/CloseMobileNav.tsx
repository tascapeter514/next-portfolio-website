import { Dispatch } from 'react';
import { MobileNavAction, MobileNavState } from '@/lib/types';

interface Props {
    mobileNav: MobileNavState,
    navDispatch: Dispatch<MobileNavAction>,
    children: React.ReactNode
}


const CloseMobileNav = ({mobileNav, navDispatch, children}: Props) => {




    return(
        <button 
            className={`${mobileNav.open ? 'max-md:absolute max-md:top-[10px] max-md:right-[10px] cursor-pointer w-[40px] bg-transparent z-99999 ' : 'hidden'}`}
            aria-controls='dashboard-navbar'
            aria-expanded={mobileNav.open} 
            onClick={() => navDispatch({type: 'OPEN_MOBILE_NAV', payload: false})}
        >
            {children}
            
        </button>
    )

}

export default CloseMobileNav 