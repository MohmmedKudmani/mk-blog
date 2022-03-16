import { Global } from '@mantine/core'

function GlobalStyles(props) {
  const { dark } = props

  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
          margin: '0',
          padding: '0',
        },

        body: {
          backgroundColor: dark
            ? theme.other.darkBackground
            : theme.other.lightBackground,
          color: dark ? '#fff' : '#000',
        },
      })}
    />
  )
}

export default GlobalStyles
