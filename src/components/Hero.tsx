import { AspectRatio } from "@/components/ui/aspect-ratio"
import ButtonWithIcon from "./ButtonWithIcon"
import Image from 'next/image'


const Hero = () => {

    return(
        <section className='min-h-[80vh]' aria-label='hero'>
            <div className=' flex w-full max-w-[1200px] m-auto justify-between p-[2em] bg-[var(--card)]'>
                <article aria-label='headline' className=' flex flex-col gap-5 items-center justify-center p-1 text-[40px] text-center'>
                    <h1>Hi, I'm Pete - a <strong>Javascript</strong> and <strong>Python</strong> fullstack developer.</h1>
                    <ButtonWithIcon />
                </article>
                <article className='w-full max-w-[500px]'>
                    <AspectRatio ratio={1 / 1} className='relative overflow-hidden'>
                        <Image src='/images/pt-portfolio-profile.jpeg' alt='portfolio-image' fill={true} />
                    </AspectRatio>
                </article>
            </div>
        </section>
    )

}

export default Hero