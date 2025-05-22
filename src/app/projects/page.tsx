import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"


const Projects = () => {
    return(
        <section aria-label="projects" className='border-5 border-red flex flex-col w-full max-w-[1200px] m-auto p-[2em] justify-center items-center'>
            <div className='flex flex-col items-center border-1 border-red p-[1em]'>
                <h1 className='text-[40px]'>Projects</h1>
                <Separator className='border-1 border-black'/>
            </div>
            <div aria-label='project-cards-container' className='border-3 border-red flex p-[2em] w-full max-w-[1000px]'>
                <article className='border-1 border-lime flex flex-col items-left gap-2 p-[2em] bg-[var(--card)]'>
                    <Link href='https://bookchatapp.onrender.com/search'><Image src='/images/bookchat-portfolio.png' width={385} height={345} alt='bookchat'></Image></Link>
                    <h3 className='text-[24px] '>Bookchat</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse expedita itaque, veniam tenetur eligendi iusto? Quisquam fugit doloribus totam excepturi qui nulla hic error explicabo numquam odit! Fugiat, eum!</p>
                </article>
                <article className='border-1 border-lime-300 flex flex-col items-left gap-2 p-[2em] bg-[var(--card)]'>
                    <Link href='https://givingfocus.netlify.app/'><Image src='/images/giving-focus-portfolio.png' alt='giving-focus' width={385} height={345}></Image></Link>
                    <h3 className='text-[24px] '>Giving Focus LLC</h3>
                    <p className='border-3 border-red-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse expedita itaque, veniam tenetur eligendi iusto? Quisquam fugit doloribus totam excepturi qui nulla hic error explicabo numquam odit! Fugiat, eum!</p>
                </article>
            </div>

        </section>
        
    )
}

export default Projects