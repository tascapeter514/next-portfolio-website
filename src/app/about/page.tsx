import { AspectRatio } from "@/components/ui/aspect-ratio"
import { AccordionInfo } from "@/lib/types"
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'




const accordionContents = [
    {
        label: 'Frontend',
        src: 'public/about-icons/code-solid.svg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem amet aperiam perferendis porro assumenda quia ullam ratione, praesentium quae esse rerum id magni doloremque doloribus recusandae veniam asperiores. Molestias.'
    
    },
    {
        label: 'Backend',
        src: 'public/about-icons/microchip-solid.svg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem amet aperiam perferendis porro assumenda quia ullam ratione, praesentium quae esse rerum id magni doloremque doloribus recusandae veniam asperiores. Molestias.'
    },
    {
        label: 'Data Analytics',
        src: 'public/about-icons/database-solid.svg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem amet aperiam perferendis porro assumenda quia ullam ratione, praesentium quae esse rerum id magni doloremque doloribus recusandae veniam asperiores. Molestias.'

    }
]




const About = () => {
    return(
        //About Sectio
        <section className='border-1 border-black-700'>
            <h2 className='text-6xl font-bold text-black'>About Me</h2>
            {/* Content Container */}
            <div className='flex flex-col gap-7 md:flex-row border-3 border-red-900'>
                {/* Text and accordion article */}
                <article className='flex flex-col max-w-7xl'>
                    {/* Upper Text */}
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique pariatur deserunt praesentium, odio expedita dolorem atque numquam facere dolores voluptatem hic incidunt, porro cum ea repellendus adipisci natus non voluptatum!</p>
                    {/* Accordion Container */}
                    <div>
                    

                    </div>
                    {/* Lower Text */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deleniti? Quaerat, quae deleniti tenetur voluptatum vel rerum maiores doloremque error voluptas asperiores, nam adipisci assumenda rem provident ut quia! Praesentium!</p>
                </article>
                {/* Image Container */}
                <article className='border-3 border-black-900'>
                    <AspectRatio>
                        <Image src='' alt='about-me-pic' />
                    </AspectRatio>
                </article>
            </div>
        </section>
    )
}

export default About