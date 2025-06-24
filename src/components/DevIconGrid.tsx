import Image from "next/image"
import { devIcons } from "public/data/client-data"
import { DevIcon } from "@/lib/types"





const DevIconGrid = () => {

    return(
        <section aria-label='dev-icon-grid' className='bg-[var(--secondary)] w-full mt-3'>
            <article className=' flex flex-col w-full max-w-[1200px] m-auto h-fill items-center'>
                <h1 className='text-[40px] max-w-[fit-content]'>
                    Technologies

                </h1>
                <ul className='w-full grid justify-items-center [grid-template-columns:repeat(auto-fit,minmax(100px,1fr))] gap-6 p-[2em] max-sm:gap-11 max-sm:[grid-template-columns:repeat(auto-fit,minmax(70px,1fr))]'>
                    {devIcons.map((icon: DevIcon) => (
                        <li key={icon.label} 
                            className='aspect-square h-[100px] flex flex-col text-center max-[375px]:h-[80px]'
                        >
                            <Image src={icon.src} width={100} height={100} layout='responsive' alt='javascript-icon'/>
                                <span className='w-full'>{icon.label}</span>
                                
                        </li>
                
                    ))}
                </ul>
            </article>

        </section>
    )

}


export default DevIconGrid