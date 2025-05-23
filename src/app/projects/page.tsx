import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"


export type Project = {
    link: string,
    imageSrc: string,
    label: string,
    text: string
}

const projects = [
    {
        link: 'https://bookchatapp.onrender.com/search',
        imageSrc: '/images/bookchat-portfolio.png',
        label: 'Bookchat',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse expedita itaque, veniam tenetur eligendi iusto? Quisquam fugit doloribus totam excepturi qui nulla hic error explicabo numquam odit! Fugiat, eum!"

    },
    {
        link: 'https://givingfocus.netlify.app/',
        imageSrc: '/images/giving-focus-portfolio.png',
        label: 'Giving Focus',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse expedita itaque, veniam tenetur eligendi iusto? Quisquam fugit doloribus totam excepturi qui nulla hic error explicabo numquam odit! Fugiat, eum!"

    }
]



const Projects = () => {
    return(
        <section aria-label="projects" className='flex flex-col w-full max-w-[1200px] m-auto p-[2em] justify-center items-center'>
            <div className='flex flex-col items-center p-[1em]'>
                <h1 className='text-[40px]'>Projects</h1>
                <Separator className='border-1 border-black'/>
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
                {/* <article className=' flex flex-col items-left gap-2 p-[2em] bg-[var(--card)] rounded-lg shadow transition hover:shadow-lg'>
                    <Link href='https://bookchatapp.onrender.com/search'><Image src='/images/bookchat-portfolio.png' width={385} height={345} alt='bookchat'></Image></Link>
                    <h3 className='text-[24px] text-[var(--card-foreground)] '>Bookchat</h3>
                    <p className='text-[var(--muted-foreground)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse expedita itaque, veniam tenetur eligendi iusto? Quisquam fugit doloribus totam excepturi qui nulla hic error explicabo numquam odit! Fugiat, eum!</p>
                </article>
                <article className=' flex flex-col items-left gap-2 bg-[var(--card)] rounded-lg shadow transition hover:shadow-lg'>
                    <Link href='https://givingfocus.netlify.app/'><Image className='w-full' src='/images/giving-focus-portfolio.png' alt='giving-focus' width={385} height={345}></Image></Link>
                    <div className='p-[2em]'>
                        <h3 className='text-[24px] text-[var(--card-foreground)]'>Giving Focus LLC</h3>
                        <p className='text-[var(--muted-foreground)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse expedita itaque, veniam tenetur eligendi iusto? Quisquam fugit doloribus totam excepturi qui nulla hic error explicabo numquam odit! Fugiat, eum!</p>
                    </div>
                </article> */}
            </ul>

        </section>
        
    )
}

export default Projects