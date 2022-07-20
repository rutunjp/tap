import { extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'black',
        bg: 'white',
        fontFamily: 'Segoe UI',
        h1: { fontWeight: '700' },
        h2: { fontWeight: '600' },
      },
    },
  },
})

export default theme
