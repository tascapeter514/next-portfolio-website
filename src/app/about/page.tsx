import { AspectRatio } from "@/components/ui/aspect-ratio"
import { accordionContents } from "public/data/client-data"
import { AccordionInfo } from "@/lib/types"
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'





const About = () => {
    return(
        //About Sectio
        <section className='border-1 border-black-700'>
            <h2 className='text-6xl font-bold text-black p-[.25em]'>About Me</h2>
            {/* Content Container */}
            <div className='flex flex-col gap-7 md:flex-row border-3 border-red-900'>
                {/* Text and accordion article */}
                <article className='flex flex-col max-w-5xl p-[1em]'>
                    {/* Upper Text */}
                    <p className='text-lg font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique pariatur deserunt praesentium, odio expedita dolorem atque numquam facere dolores voluptatem hic incidunt, porro cum ea repellendus adipisci natus non voluptatum!</p>
                    {/* Accordion Container */}
                    <ul className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-8 w-full md:max-w-3xl gap-4'>
                        {accordionContents.map((accordion: AccordionInfo) => (
                            <li key={accordion.label} className='bg-[var(--card)]'>
                                <div className='p-4 rounded-lg border-1 border-[var(--border)] sm:max-w-[250px] md:max-w-[280px]'>
                                    <div className='flex items-center gap-2 mb-3'>
                                        <Image src={accordion.src} alt={`${accordion.label}-icon`} width={25} height={25} className='bg-orange'/>
                                        <h3 className='text-[var(--foreground)]'>{accordion.label}</h3>
                                    </div>
                                    <p>{accordion.text}</p>
                                </div>
                                
                            </li>
                        ))}
                    </ul>
                    {/* Lower Text */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deleniti? Quaerat, quae deleniti tenetur voluptatum vel rerum maiores doloremque error voluptas asperiores, nam adipisci assumenda rem provident ut quia! Praesentium!</p>
                </article>
                {/* Image Container */}
                <article className='border-3 border-black-900 w-full max-w-[500px]'>
                    <AspectRatio ratio={1 / 1} className='relative overflow-hidden'>
                        <Image src='/images/pt-portfolio-profile.jpeg' fill alt='about-me-pic' />
                    </AspectRatio>
                </article>
            </div>
        </section>
    )
}

export default About

{/* <Accordion type='single' collapsible>
                                    <AccordionItem value={accordion.label} className=''>
                                        <AccordionTrigger className='flex items-center gap-2 mb-3 w-full justify-center'>
                                            <Image className='px-[.25em]'src={accordion.src} alt={`${accordion.label}-icon`} width={25} height={25}/>
                                            {accordion.label}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {accordion.text}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion> */}