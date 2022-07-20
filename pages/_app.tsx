import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../styles/theme'
import Navbar from '../components/common/Navbar'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Navbar /> <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
