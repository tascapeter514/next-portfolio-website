import { Project } from "@/lib/types"
import {projects} from 'public/data/client-data'
import Link from "next/link"
import Image from "next/image"




const Projects = () => {
    return(
        <section aria-label="projects" className='flex flex-col w-full max-w-[1200px] m-auto p-[2em] justify-center items-center max-lg:p-[1.5em] max-sm:p-[.75em]'>
            <div className='flex flex-col items-center p-[1em]'>
                <h1 className='text-[40px] lineUp'>Projects</h1>
            </div>
            <ul aria-label='project-cards-container' className=' flex p-[2em] w-full max-w-[1000px] gap-3 max-lg:p-[1.5em] max-md:flex-col max-sm:p-[.75em]'>
                {projects.map((project: Project) => (
                    <li className='flipIn' key={project.label}>
                        <article className=' flex flex-col items-left gap-2 bg-[var(--card)] rounded-lg shadow transition hover:shadow-lg'>
                            <Link href={project.link}><Image className='w-full' src={project.imageSrc} alt='giving-focus'width={385} height={345}>
                                </Image>
                            </Link>
                            <div className='p-[2em] max-lg:p-[1.5em] max-md:p-[1em]'>
                                <h2 className='text-[24px] text-[var(--card-foreground)]'>{project.label}</h2>
                                <p className='text-[var(--card-foreground)] max-sm:text-base'>{project.text}</p>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>

        </section>
        
    )
}

export default Projects