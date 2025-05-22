import Image from "next/image"
import { Icon } from "@/app/page"


type Icon = {src: string, label: string}

const icons = [
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
        <section aria-label='dev-icon-grid' className='border-5 border-red flex flex-col text-center w-full max-w-[1200px] m-auto h-fill'>
            <h1 className='text-[40px]'>Tech Stack and Skills</h1>
            <ul className='w-full grid [grid-template-columns:repeat(auto-fit,minmax(100px,1fr))] gap-6 p-[1em]'>
                {/* <li className=' aspect-square  h-[100px] flex flex-col items-center'><Image src='/dev-icons/javascript.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>Javascript</span></li>
                <li className=' aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/typescript.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>TypeScript</span></li>
                <li className=' aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/react.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>React</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/python.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>Python</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/django.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>Django</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/nextjs.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>Next.js</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/tailwindcss.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>Tailwind CSS</span></li>
                <li className=' aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/express.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>Express</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/nodejs.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>Node.js</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/vue.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>Vue</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/redux.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>Redux</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/git.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>Git</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/heroku.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>Heroku</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/docker.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>Docker</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/postgresql.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>PostgreSQL</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/sqlite.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>SQlite</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/css.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>CSS</span></li>
                <li className='aspect-square h-[100px] flex flex-col items-center'><Image src='/dev-icons/html5.svg' width={100} height={100} layout='responsive' alt='javascript-icon'/><span>HTML5</span></li> */}
                {icons.map((icon: Icon) => (
                    <li key={icon.label} className=' aspect-square  h-[100px] flex flex-col items-center'><Image src={icon.src} width={100} height={100} layout='responsive' alt='javascript-icon'/><span>{icon.label}</span></li>
                    
                ))}

                
            </ul>

        </section>
    )

}


export default DevIconGrid