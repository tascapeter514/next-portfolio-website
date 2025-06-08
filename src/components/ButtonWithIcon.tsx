'use client'

import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const ButtonWithIcon = () => {

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    return(
        <Button className='lineUp group relative w-full max-w-[200px] flex justify-center text-lg p-[1.75em] shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-black hover:shadow-black-600 hover:before:border-[15px] hover:before:rounded-xl bg-black rounded-sm text-white cursor-pointer max-sm:max-w-[200px] max-sm:text-[12px]'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        
        >
            Learn How <ChevronRight className={`size-5 ${isHovered ? 'animate-spin-once' : ''}`}/> 
        </Button> 
    )

}

export default ButtonWithIcon