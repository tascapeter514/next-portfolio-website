import Hero from '@/components/Hero'
import DevIconGrid from '@/components/DevIconGrid'


const HomePage = () => {


  return (

    <main className='flex flex-col gap-10  w-full max-md:gap-55 max-sm:gap-5 '>
      <Hero />
      <DevIconGrid />
    </main>
      
  )
}

export default HomePage
