import { useState } from 'react'
import { MantineProvider, ColorSchemeProvider, Global } from '@mantine/core'
import GlobalStyles from './GlobalStyles'
import { NotificationsProvider } from '@mantine/notifications'

const lightPrimary = [
  '#EAF5FB',
  '#C4E3F2',
  '#9ED1EA',
  '#79BFE2',
  '#53ADDA',
  '#2D9BD2',
  '#2D9BD2', // primary
  '#247CA8',
  '#1B5D7E',
  '#123E54',
]
const lightColors = {
  lightPrimary: '#2D9BD2',
  lightSecondary: '#ff0691',
  lightBackground: '#EAF5FA',
}

const darkPrimary = [
  '#EEF0F6',
  '#D0D4E7',
  '#B1B8D7',
  '#939DC8',
  '#7481B9',
  '#5665A9',
  '#455187',
  '#343D65',
  '#3E497A', // primary
  '#222844',
]
const darkColors = {
  darkPrimary: '#3E497A',
  darkSecondary: '#fca311',
  darkBackground: '#21325E',
}

function Theme(props) {
  const [colorScheme, setColorScheme] = useState('dark')

  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  }

  const dark = colorScheme === 'dark'

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,

          colors: {
            darkPrimary,
            lightPrimary,
          },

          primaryColor: dark ? 'darkPrimary' : 'lightPrimary',

          other: {
            ...lightColors,
            ...darkColors,
          },
          fontSizes: {
            xl: '2.5rem',
          },
          shadows: {
            xl: '0px 0px 7px 2px rgba(0,0,0,0.1)',
          },
        }}
      >
        <NotificationsProvider position='bottom-left'>
          <GlobalStyles dark={dark} />
          {props.children}
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default Theme
