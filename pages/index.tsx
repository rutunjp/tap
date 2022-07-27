import type { NextPage } from 'next'
import AboutUs from '../components/common/AboutUs'
import EcoFriendly from '../components/common/EcoFriendly'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import Hero from '../components/common/Hero'
import HeroCards from '../components/common/HeroCards'
import OurClients from '../components/common/OurClients'
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <HeroCards />
      <EcoFriendly />
      <OurClients />
    </>
  )
}

export default Home
