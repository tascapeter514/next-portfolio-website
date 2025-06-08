import ButtonWithIcon from "./ButtonWithIcon"
import Image from 'next/image'


const Hero = () => {

    return(
        <section className='min-h-[80vh] max-lg:min-h-0 max-lg:max-h-[60vh] max-md:max-h-0 max-md:min-h-[90vh] ' aria-label='hero'>
            <div className='flex w-full max-md:items-center max-md:flex-col max-w-[1200px] m-auto justify-between p-[2em] bg-[var(--card)] gap-3 max-sm:p-[1em]'>
                <article aria-label='headline' className='w-full max-w-[450px] flex flex-col gap-5 items-left justify-center p-1 text-6xl/20 max-lg:text-4xl text-left            max-md:text-5xl max-sm:text-4xl max-md:leading-15 max-sm:leading-12'>
                    <h1 className='lineUp'>Hi, I&apos;m Pete - a <strong>Javascript</strong> and <strong>Python</strong> full stack developer.</h1>
                    <h2 className='text-2xl/10'>I deliver software solutions by transcending software silos</h2>
                    <ButtonWithIcon />
                </article>
                <article className='flipIn w-full max-w-[500px] perspective-[1000px]'>
                    <div className='relative overflow-hidden w-full aspect-square '>
                        <Image src='/images/pt-portfolio-profile.jpeg' alt='portfolio-image' fill={true}  />
                    </div>
                </article>
            </div>
        </section>
    )

}

export default Hero