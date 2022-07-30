import { ChakraProvider, LightMode } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ScrollToTop from 'react-scroll-to-top'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop smooth viewBox="-35 0 256 256" color="#4299E1" />
    </ChakraProvider>
  )
}

export default MyApp
