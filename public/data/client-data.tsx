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
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse expedita itaque, veniam tenetur eligendi iusto? Quisquam fugit doloribus totam excepturi qui nulla hic error explicabo numquam odit! Fugiat, eum!"

    },
    {
        link: 'https://givingfocus.netlify.app/',
        imageSrc: '/images/giving-focus-portfolio.png',
        label: 'Giving Focus',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse expedita itaque, veniam tenetur eligendi iusto? Quisquam fugit doloribus totam excepturi qui nulla hic error explicabo numquam odit! Fugiat, eum!"

    }
]

// ABOUT DATA

export const cards = [
    {
        label: 'Frontend',
        // src: '/about-icons/code-solid.svg',
        Icon: BracketsIcon,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem amet aperiam perferendis porro assumenda quia ullam ratione, praesentium quae esse rerum id magni doloremque doloribus recusandae veniam asperiores. Molestias.'
    
    },
    {
        label: 'Backend',
        Icon: MicrochipIcon,
        // src: '/about-icons/microchip-solid.svg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem amet aperiam perferendis porro assumenda quia ullam ratione, praesentium quae esse rerum id magni doloremque doloribus recusandae veniam asperiores. Molestias.'
    },
    {
        label: 'Data Analytics',
        Icon: DatabaseIcon,
        // src: '/about-icons/database-solid.svg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem amet aperiam perferendis porro assumenda quia ullam ratione, praesentium quae esse rerum id magni doloremque doloribus recusandae veniam asperiores. Molestias.'

    }
]

// FOOTER DATA

export const socialIcons = [
    {src: '/social-icons/github.svg', label: 'Github', link:'https://github.com/tascapeter514'},
    {src: '/social-icons/linkedin.svg', label: 'LinkedIn', link: 'https://www.linkedin.com/in/peter-tasca/'},
    {src: '/social-icons/twitter.svg', label: 'Twitter', link: 'https://x.com/TascaPeter'},

]


