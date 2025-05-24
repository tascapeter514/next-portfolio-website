import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cards } from "public/data/client-data"
import { Card } from "@/lib/types"
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

import { BracketsIcon } from "@/icons/about-icons/react-icons"






const About = () => {
    return(
        //About Section
        <section className='w-full max-w-[1200px] p-[1em]'>
            <h2 className='text-6xl font-bold text-black p-[.25em] '>About Me</h2>
            {/* Content Container */}
            <div className='flex flex-col gap-2 md:flex-row w-full'>
                {/* Text and card article */}
                <article className='flex flex-col max-w-5xl p-[1em] gap-5'>
                    {/* Upper Text */}
                    <p className='text-lg font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique pariatur deserunt praesentium, odio expedita dolorem atque numquam facere dolores voluptatem hic incidunt, porro cum ea repellendus adipisci natus non voluptatum!</p>
                    {/* Card Container */}
                    <ul className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full md:max-w-3xl gap-4'>
                        {cards.map((card: Card) => (
                            <li key={card.label} className='bg-[var(--card)]'>
                                <div className='p-4 rounded-lg  sm:max-w-[250px] md:max-w-[280px]'>
                                    <div className='flex items-center justify-left gap-2 mb-3'>
                                        <card.Icon className='w-7 h-7 text-[var(--chart-5)]' />
                                        <h3 className='text-[var(--foreground)]'>{card.label}</h3>
                                    </div>
                                    <p className='text-sm font-normal text-[var(--muted-foreground)]'>{card.text}</p>
                                </div>
                                
                            </li>
                        ))}
                    </ul>
                    {/* Lower Text */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deleniti? Quaerat, quae deleniti tenetur voluptatum vel rerum maiores doloremque error voluptas asperiores, nam adipisci assumenda rem provident ut quia! Praesentium!</p>
                </article>
                {/* Image Container */}
                <article className='w-full h-fit max-w-[500px] border-1 border-black-300 max-md:mx-auto'>
                    <div className='relative overflow-hidden aspect-square'>
                        <Image src='/images/pt-portfolio-profile.jpeg' fill alt='about-me-pic' />
                    </div>
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