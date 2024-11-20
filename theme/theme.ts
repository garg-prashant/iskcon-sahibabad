import { extendTheme } from '@chakra-ui/react'

const colors = {
    primary:{
        default: "#E3813A"
    },
    primaryDark:{
      default: "#FF6436"
    }
}

const theme = extendTheme({
    fonts: {
      heading: `'laot', sans-serif`,
      body: `'laot', sans-serif`,
    },
    semanticTokens: {colors},
  })
  
  export default theme