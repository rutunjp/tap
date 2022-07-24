import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutUs from '../components/common/AboutUs'
import ClientsCard from '../components/common/ClientTestimonialCard'
import EcoFriendly from '../components/common/EcoFriendly'
import Hero from '../components/common/Hero'
import HeroCards from '../components/common/HeroCards'
import OurClients from '../components/common/OurClients'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Box px="1em">
      <Hero />
      <AboutUs />
      <HeroCards />
      <EcoFriendly />
      <OurClients />
    </Box>
  )
}

export default Home
