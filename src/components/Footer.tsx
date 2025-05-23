import Image from "next/image"
import Link from "next/link"

export type SocialIcon = {
    src: string, label: string, link: string
}


const icons = [
    {src: '/social-icons/github.svg', label: 'Github', link:'https://github.com/tascapeter514'},
    {src: '/social-icons/linkedin.svg', label: 'LinkedIn', link: 'https://www.linkedin.com/in/peter-tasca/'},
    {src: '/social-icons/twitter.svg', label: 'Twitter', link: 'https://x.com/TascaPeter'},

]




const Footer = () => {
    return(
        <footer className='w-full flex flex-col items-center justify-center gap-3 p-[2em]'>
            <ul className='flex gap-3'>
                {icons.map((icon: SocialIcon) => (
                    <li key={icon.label} className='hover:animate-bounce hover:bg-white cursor-pointer'>
                        <Link href={icon.link}><Image src={icon.src} width={50} height={50} alt={`${icon.label}-icon`} /></Link>
                    </li>
                ))}
            </ul>
            <small>Copyright @2025 Peter Tasca All Rights Reserved</small>
        </footer>
    )
}

export default Footer