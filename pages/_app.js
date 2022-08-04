import '../styles/globals.css'
import { Box, Grommet } from 'grommet'

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Component {...pageProps} />
      </Box>
    </Grommet>
  )
}

export default MyApp
