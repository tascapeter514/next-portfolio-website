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

    <main>
      <Hero />
      <DevIconGrid />

    </main>
      
  )
}

export default HomePage
