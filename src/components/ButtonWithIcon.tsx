import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ButtonWithIcon = () => {

    return(
        <Button className='relative w-full max-w-[250px] flex justify-center text-base p-[2em] overflow:hidden shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-black hover:shadow-black-600 hover:before:border-[15px] hover:before:rounded-xl'>
            See What I Can Do For You <ChevronRight className='size-5 animate-spin'/> 
        </Button> 
    )

}

export default ButtonWithIcon