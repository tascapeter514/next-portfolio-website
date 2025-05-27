import { cards } from "public/data/client-data"
import { Card } from "@/lib/types"
import Image from "next/image"


const About = () => {
    return(
        //About Section
        <section className='w-full max-w-[1200px] p-[1em]'>
            <h1 className='text-6xl text-black p-[.25em] lineUp'>About Me</h1>
            {/* Content Container */}
            <div className='flex flex-col gap-2 md:flex-row w-full'>
                {/* Text and card article */}
                <article className='flex flex-col max-w-5xl p-[1em] gap-5'>
                    {/* Upper Text */}
                    <p className='text-lg font-medium lineUp'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique pariatur deserunt praesentium, odio expedita dolorem atque numquam facere dolores voluptatem hic incidunt, porro cum ea repellendus adipisci natus non voluptatum!</p>
                    {/* Card Container */}
                    <ul className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full md:max-w-3xl gap-4'>
                        {cards.map((card: Card) => (
                            <li key={card.label} className='bg-[var(--card)] flipIn'>
                                <div className='p-4 rounded-lg  sm:max-w-[250px] md:max-w-[280px]'>
                                    <div className='flex items-center justify-left gap-2 mb-3'>
                                        <card.Icon className='w-7 h-7 text-[var(--chart-5)]' />
                                        <h2 className='text-[var(--foreground)]'>{card.label}</h2>
                                    </div>
                                    <p className='text-sm font-normal text-[var(--card-foreground)] lineUp'>{card.text}</p>
                                </div>
                                
                            </li>
                        ))}
                    </ul>
                    {/* Lower Text */}
                    <p className='lineUp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deleniti? Quaerat, quae deleniti tenetur voluptatum vel rerum maiores doloremque error voluptas asperiores, nam adipisci assumenda rem provident ut quia! Praesentium!</p>
                </article>
                {/* Image Container */}
                <article className='w-full h-fit max-w-[500px] border-1 border-black-300 max-md:mx-auto'>
                    <div className='relative overflow-hidden aspect-square flipIn'>
                        <Image src='/images/pt-portfolio-profile.jpeg' fill alt='about-me-pic' />
                    </div>
                </article>
            </div>
        </section>
    )
}

export default About
