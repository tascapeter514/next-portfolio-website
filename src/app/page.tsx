import Hero from '@/components/Hero'
import DevIconGrid from '@/components/DevIconGrid'
import path from 'path';
import { capitalizeFirstLetter } from '@/utils/functions';
import fs from 'fs'


export type Icon = {
    src: string,
    label: string
}



const HomePage = () => {


  return (

    <main className='flex flex-col gap-10 padding-3 w-full '>
      <Hero />
      <DevIconGrid />

    </main>
      
  )
}

export default HomePage
