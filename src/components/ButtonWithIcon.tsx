import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ButtonWithIcon = () => {

    return(
        <Button className='w-full max-w-[250px] flex justify-center text-base p-[2em]'>
            See What I Can Do For You<ChevronRight className='size-5'/> 
        </Button> 
    )

}

export default ButtonWithIcon