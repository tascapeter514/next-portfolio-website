import Navigation from '@/components/Navigation'
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

  // const dir = path.join(process.cwd(), 'public/dev-icons');
  // const files = fs.readdirSync(dir);
  // const icons = files.map((file) => ({
  //   src: `/dev-icons/${file}`,
  //   label: capitalizeFirstLetter(path.parse(file).name)
  // }))

  // console.log('icons:', icons)



  return (

    <main>
      <Navigation />
      <Hero />
      <DevIconGrid />

    </main>
      
  )
}

export default HomePage
