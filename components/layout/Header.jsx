import {
  Header as MantineHeader,
  ActionIcon,
  useMantineColorScheme,
  Box,
  Burger,
} from '@mantine/core'
import useStyle from './headerStyle'
import { IconSun, IconMoon } from '@tabler/icons'
import logoDark from '../../public/svg/mk-logo-dark.svg'
import logoLight from '../../public/svg/mk-logo-light.svg'
import Image from 'next/image'

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
          <Image
            width={50}
            height={50}
            alt='logo'
            src={dark ? logoDark : logoLight}
          />
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
      {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
    </ActionIcon>
  )
}

export default Header
