import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === 'dark'
  const darkPrimary = theme.other.darkPrimary
  const darkSecondary = theme.other.darkSecondary
  const lightPrimary = theme.other.lightPrimary
  const lightSecondary = theme.other.lightSecondary

  return {
    navbarContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
      padding: '0 30px',
    },

    linkClass: {
      '&:hover': {
        opacity: '0.9',
      },
      fontWeight: 500,
      color: dark ? theme.white : theme.black,
    },

    linkActiveClass: {
      color: dark ? darkSecondary : lightSecondary,
    },

    toggleDarkMode: {
      color: dark ? darkSecondary : lightSecondary,
      backgroundColor: dark ? darkPrimary : '#D4D4D4',

      '&:hover': {
        backgroundColor: theme.fn.darken(dark ? darkPrimary : '#D4D4D4', 0.1),
      },
    },

    menuToggleDarkMode: {
      color: dark ? darkSecondary : lightSecondary,
      backgroundColor: dark ? darkPrimary : lightPrimary,
      position: 'absolute',
      right: '10px',
      top: '10px',
      '&:hover': {
        backgroundColor: !dark && theme.fn.lighten(lightSecondary, 0.5),
      },
    },

    burger: {
      [theme.fn.largerThan('md')]: {
        display: 'none',
      },
      zIndex: 999,
    },

    menuModal: {
      '.mantine-Modal-modal': {
        top: 20,
        backgroundColor: dark ? darkPrimary : lightPrimary,
        padding: '1rem',
      },
    },
  }
})

export default useStyles
