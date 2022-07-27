import { ChakraProvider, LightMode } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
