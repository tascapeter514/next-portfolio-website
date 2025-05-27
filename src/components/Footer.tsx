import Image from "next/image"
import Link from "next/link"
import { SocialIcon } from "@/lib/types"
import { socialIcons } from "public/data/client-data"





const Footer = () => {
    return(
        <footer className='w-full flex flex-col items-center justify-center gap-3 p-[2em]'>
            <ul className='flex gap-3'>
                {socialIcons.map((icon: SocialIcon) => (
                    <li key={icon.label} className='hover:animate-bounce hover:bg-white cursor-pointer'>
                        <Link href={icon.link}><Image src={icon.src} width={50} height={50} alt={`${icon.label}-icon`} /></Link>
                    </li>
                ))}
            </ul>
            <small className='max-sm:text-center'>Copyright @2025 Peter Tasca All Rights Reserved</small>
        </footer>
    )
}

export default Footer