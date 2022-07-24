import '../styles/globals.css'
import { ChakraProvider, LightMode } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../styles/theme'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <LightMode>
          <Navbar /> <Component {...pageProps} />
          <Footer />
        </LightMode>
      </ChakraProvider>
    </>
  )
}

export default MyApp
