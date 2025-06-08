import { BracketsIcon, DatabaseIcon, MicrochipIcon } from "@/icons/about-icons/react-icons"

// HOMEPAGE DATA

export const devIcons = [
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




// PROJECT DATA
export const projects = [
    {
        link: 'https://bookchatapp.onrender.com/search',
        imageSrc: '/images/bookchat-portfolio.png',
        label: 'Bookchat',
        text: "A fullstack social app built to spark community through a shared love of books. Inspired by my time teaching literature at UCLA and hosting virtual book clubs during the pandemic, Bookchat makes it simple to connect, organize, and read together—across time zones, backgrounds, and genres."

    },
    {
        link: 'https://givingfocus.netlify.app/',
        imageSrc: '/images/giving-focus-portfolio.png',
        label: 'Giving Focus',
        text: "Built a fully responsive static site using Create React App, designing the layout and writing all CSS from scratch—no templates involved. Developed a lightweight testimonial carousel and mobile-first navigation to enhance engagement and accessibility across devices."

    }
]

// ABOUT DATA

export const cards = [
    {
        label: 'Frontend',
        Icon: BracketsIcon,
        text: "Whether you need robust state management or smooth, user-friendly layouts, every aspect of my frontend work is crafted to deliver seamless, accessible experiences that boost user engagement and fuel your business's long-term growth."
    
    },
    {
        label: 'Backend',
        Icon: MicrochipIcon,
        text: 'By translating complex business requirements into scalable architectures, I deliver performance-optimized APIs that ensure efficient data management, reliable third-party integrations, and robust workflows for your project goals.'
    },
    {
        label: 'Data Analytics',
        Icon: DatabaseIcon,
        text: 'Leveraging data-driven insights and clear, compelling visualizations, I transform complex datasets into actionable intelligence that empowers you to make informed business decisions and uncover growth opportunities.'

    }
]

// FOOTER DATA

export const socialIcons = [
    {src: '/social-icons/github.svg', label: 'Github', link:'https://github.com/tascapeter514'},
    {src: '/social-icons/linkedin.svg', label: 'LinkedIn', link: 'https://www.linkedin.com/in/peter-tasca/'},
    {src: '/social-icons/twitter.svg', label: 'Twitter', link: 'https://x.com/TascaPeter'},

]


