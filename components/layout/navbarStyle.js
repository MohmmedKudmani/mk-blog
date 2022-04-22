import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === 'dark'
  const darkPrimary = theme.other.darkPrimary
  const darkSecondary = theme.other.darkSecondary
  const lightPrimary = theme.other.lightPrimary
  const lightSecondary = theme.other.lightSecondary

  return {
    linkClass: {
      '&:hover': {
        opacity: '0.9',
      },
      fontWeight: 500,
      color: dark ? theme.white : theme.black,
      display: 'block',
      padding: '0.5rem 1rem',
    },

    linkActiveClass: {
      color: dark ? darkSecondary : lightSecondary,
      borderRadius: '0.5rem',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
          : theme.colors[theme.primaryColor][0],
    },
    title: {
      padding: '0.6rem 0',
      margin: '0.4rem 0.3rem 0.7rem 0.3rem',
      borderBottom: '0.5px #333 solid',
    },

    footer: {
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
      paddingTop: '0.5rem',
      display: 'flex',
      alignItems: 'center',
    },
  }
})

export default useStyles
