import Header from './Header'
import Theme from '../Theme'
import { AppShell } from '@mantine/core/'
import Navbar from './Navbar'
import GlobalStyles from '../GlobalStyles'

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
        navbar={<Navbar isOpened={isOpened} setIsOpened={setOpened} />}
      >
        {children}
      </AppShell>
      <GlobalStyles isOpened={isOpened} />
    </Theme>
  )
}

export default Layout
