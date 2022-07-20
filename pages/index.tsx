import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutUs from '../components/common/AboutUs'
import EcoFriendly from '../components/common/EcoFriendly'
import Hero from '../components/common/Hero'
import HeroCards from '../components/common/HeroCards'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <HeroCards />
      <EcoFriendly />
    </>
  )
}

export default Home
