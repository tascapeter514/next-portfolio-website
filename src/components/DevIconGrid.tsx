import Image from "next/image"
import { Separator } from "@/components/ui/separator"


type DevIcon = {src: string, label: string}

const devIcons = [
    {src: '/dev-icons/javascript.svg', label: 'Javascript'},
    {src: '/dev-icons/typescript.svg', label: 'Typescript'},
    {src: '/dev-icons/react.svg', label: 'React'},
    {src: '/dev-icons/python.svg', label: 'Python'},
    {src: '/dev-icons/django.svg', label: 'Django'},
    {src: '/dev-icons/nextjs.svg', label: 'Next.js'},
    {src: '/dev-icons/tailwindcss.svg', label: 'Tailwind CSS'},
    {src: '/dev-icons/express.svg', label: 'Express'},
    {src: '/dev-icons/nodejs.svg', label: 'Node.js'},
    {src: '/dev-icons/vue.svg', label: 'Vue'},
    {src: '/dev-icons/git.svg', label: 'Git'},
    {src: '/dev-icons/heroku.svg', label: 'Heroku'},
    {src: '/dev-icons/docker.svg', label: 'Docker'},
    {src: '/dev-icons/postgresql.svg', label: 'PostgreSQL'},
    {src: '/dev-icons/sqlite.svg', label: 'SQLite'},
    {src: '/dev-icons/css.svg', label: 'CSS'},
    {src: '/dev-icons/html5.svg', label: 'HTML5'},
]


const DevIconGrid = () => {

    return(
        <section aria-label='dev-icon-grid' className='bg-[var(--secondary)] w-full'>
            <article className=' flex flex-col w-full max-w-[1200px] m-auto h-fill items-center'>
                <h1 className='text-[40px] max-w-[fit-content]'>
                    Technologies
                    <Separator className='border-1 border-black-300'/>
                </h1>
                <ul className='w-full grid [grid-template-columns:repeat(auto-fit,minmax(100px,1fr))] gap-6 p-[2em]'>
                    {devIcons.map((icon: DevIcon) => (
                        <li key={icon.label} className=' aspect-square  h-[100px] flex flex-col items-center'><Image src={icon.src} width={100} height={100} layout='responsive' alt='javascript-icon'/><span>{icon.label}</span></li>
                
                    ))}
                </ul>
            </article>

        </section>
    )

}


export default DevIconGrid