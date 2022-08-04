import '../styles/globals.css'
import { Avatar, Box, Button, Grommet, Nav, Sidebar } from 'grommet'
import { Cart, Logout, Projects } from 'grommet-icons'

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
      <Box direction="row" fill>
        <Sidebar
          flex={false}
          background="brand"
          header={<Avatar src="images/avatar.jpg" />}
          footer={<Button icon={<Logout />} hoverIndicator />}
        >
          <Nav gap="small">
            <Button icon={<Projects />} hoverIndicator />
            <Button icon={<Cart />} hoverIndicator />
          </Nav>
        </Sidebar>
        <Box flex>
          <Component {...pageProps} />
        </Box>
      </Box>
    </Grommet>
  )
}

export default MyApp
