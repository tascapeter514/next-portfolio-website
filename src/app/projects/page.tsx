import { Separator } from "@/components/ui/separator"
import { Project } from "@/lib/types"
import {projects} from 'public/data/client-data'
import Link from "next/link"
import Image from "next/image"




const Projects = () => {
    return(
        <section aria-label="projects" className='flex flex-col w-full max-w-[1200px] m-auto p-[2em] justify-center items-center'>
            <div className='flex flex-col items-center p-[1em]'>
                <h1 className='text-[40px]'>Projects</h1>
                {/* <Separator className='border-1 border-black'/> */}
            </div>
            <ul aria-label='project-cards-container' className=' flex p-[2em] w-full max-w-[1000px] gap-3'>
                {projects.map((project: Project) => (
                    <li key={project.label}>
                        <article className=' flex flex-col items-left gap-2 bg-[var(--card)] rounded-lg shadow transition hover:shadow-lg'>
                            <Link href={project.link}><Image className='w-full' src={project.imageSrc} alt='giving-focus'width={385} height={345}>
                                </Image>
                            </Link>
                            <div className='p-[2em]'>
                                <h3 className='text-[24px] text-[var(--card-foreground)]'>{project.label}</h3>
                                <p className='text-[var(--muted-foreground)]'>{project.text}</p>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>

        </section>
        
    )
}

export default Projects