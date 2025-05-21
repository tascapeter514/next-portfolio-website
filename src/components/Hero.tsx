import { AspectRatio } from "@/components/ui/aspect-ratio"
import ButtonWithIcon from "./ButtonWithIcon"


import Image from 'next/image'


const Hero = () => {

    return(
        <section className='border-5 border-red flex w-full max-w-[1200px] m-auto justify-between p-[2em]' aria-label='hero'>
            <article aria-label='headline' className='border-2 border-red flex flex-col gap-5 items-center justify-center p-1 text-[40px] text-center'>
                <h1>Hi, I'm Pete - a <strong>Javascript</strong> and <strong>Python</strong> fullstack developer.</h1>
                <ButtonWithIcon />
                

            </article>
            <article className='w-full max-w-[500px]'>
                <AspectRatio ratio={1 / 1} className='relative border-5 border-green-700 overflow-hidden'>
                    <Image src='/images/pt-portfolio-profile.jpeg' alt='portfolio-image' fill={true} />
                </AspectRatio>
            </article>
        </section>
    )

}

export default Hero