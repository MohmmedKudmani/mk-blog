import Header from './Header'
import Theme from '../Theme'
import { AppShell } from '@mantine/core/'
import Navbar from './Navbar'
import { useState } from 'react'

function Layout(props) {
  const { children } = props
  const [isOpened, setOpened] = useState(false)

  const onOpenedHandler = () => {
    setOpened((o) => !o)
  }

  return (
    <Theme>
      <AppShell
        sx={{
          '.mantine-AppShell-main': {
            padding: '0',
          },
        }}
        header={
          <Header isOpened={isOpened} onOpenedHandler={onOpenedHandler} />
        }
        fixed
        navbar={<Navbar isOpened={isOpened} />}
      >
        {children}
      </AppShell>
    </Theme>
  )
}

export default Layout
