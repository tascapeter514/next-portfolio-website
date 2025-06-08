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
                <article className='flex flex-col max-w-4xl p-[1em] gap-2'>
                    {/* Upper Text */}
                    <p className='text-lg font-medium lineUp'>Before tech, I studied and taught English literature at UCLA, then worked as a copywriter and brand strategist. That path—rooted in language, analysis, and communication—shaped how I approach software development today: with clarity, scalability, and a focus on the human side of technology.</p>

                    <p>Now, as a fullstack developer, I build clean, modular applications using tools like React, TypeScript, Django, and Node. I&apos;m skilled at translating complex business goals into intuitive user experiences and equally comfortable collaborating across teams or working independently to deliver high-impact, maintainable solutions.</p>
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
                    <p className='lineUp'>As a generalist, I thrive at the intersection of disciplines, with my technical skill set complementing my ability to bridge communication gaps between developers, designers, and product teams. If you&apos;re looking for a developer who can drive projects forward through strategic problem-solving and clear communication, let&apos;s connect.</p>
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
