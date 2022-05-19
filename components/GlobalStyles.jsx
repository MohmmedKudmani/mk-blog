import { Global } from '@mantine/core'

function GlobalStyles({ isOpened }) {
  return (
    <Global
      styles={(theme) => ({
        body: {
          overflow: isOpened ? 'hidden' : 'overlay',
        },
        '::-webkit-scrollbar': {
          width: '15px',
          position: 'fixed',
        },

        '::-webkit-scrollbar-thumb': {
          borderRadius: '8px',
          border: '4px solid transparent',
          backgroundClip: 'content-box',
          backgroundColor: theme.colorScheme === 'dark' ? '#fca311' : '#ff0691',
        },

        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme.fn.rgba(
            theme.colorScheme === 'dark' ? '#fca311' : '#ff0691',
            0.7
          ),
        },
      })}
    />
  )
}

export default GlobalStyles
