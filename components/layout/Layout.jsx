import Navbar from './Navbar'
import Footer from './Footer'
import Theme from '../Theme'
import { AppShell } from '@mantine/core/'

function Layout(props) {
  const { children } = props

  return (
    <Theme>
      <AppShell
        sx={{
          '.mantine-AppShell-main': {
            padding: '0',
          },
        }}
        header={<Navbar />}
      >
        {children}
      </AppShell>
    </Theme>
  )
}

export default Layout
