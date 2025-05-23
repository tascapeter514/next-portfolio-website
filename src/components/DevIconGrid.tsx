import Image from "next/image"
import { devIcons } from "public/data/client-data"
import { DevIcon } from "@/lib/types"
import { Separator } from "@/components/ui/separator"





const DevIconGrid = () => {

    return(
        <section aria-label='dev-icon-grid' className='bg-[var(--secondary)] w-full'>
            <article className=' flex flex-col w-full max-w-[1200px] m-auto h-fill items-center'>
                <h1 className='text-[40px] max-w-[fit-content]'>
                    Technologies
                    <Separator className='border-1 border-black-300'/>
                </h1>
                <ul className='w-full grid [grid-template-columns:repeat(auto-fit,minmax(100px,1fr))] gap-6 p-[2em]'>
                    {devIcons.map((icon: DevIcon) => (
                        <li key={icon.label} className=' aspect-square  h-[100px] flex flex-col items-center'><Image src={icon.src} width={100} height={100} layout='responsive' alt='javascript-icon'/><span>{icon.label}</span></li>
                
                    ))}
                </ul>
            </article>

        </section>
    )

}


export default DevIconGrid