import {
  Header as MantineHeader,
  Text,
  ActionIcon,
  useMantineColorScheme,
  Box,
  Burger,
} from '@mantine/core'
import useStyle from './headerStyle'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

function Header(props) {
  const { classes } = useStyle()

  const { isOpened, onOpenedHandler } = props

  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const dark = colorScheme === 'dark'

  return (
    <>
      <MantineHeader
        height={80}
        sx={{
          backgroundColor: dark ? '#1A1B1E' : '#fff',
        }}
      >
        <Box className={classes.navbarContainer}>
          <Burger
            opened={isOpened}
            onClick={onOpenedHandler}
            className={classes.burger}
          />
          <Text>Logo</Text>
          <LightDarkMode
            dark={dark}
            toggleColorScheme={toggleColorScheme}
            className={classes.toggleDarkMode}
          />
        </Box>
      </MantineHeader>
    </>
  )
}

function LightDarkMode({ className, toggleColorScheme, dark }) {
  return (
    <ActionIcon
      variant='filled'
      size='lg'
      radius='lg'
      onClick={() => toggleColorScheme()}
      title='Toggle Dark Mode'
      className={className}
    >
      {dark ? (
        <SunIcon style={{ width: 18, height: 18 }} />
      ) : (
        <MoonIcon style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  )
}

export default Header
