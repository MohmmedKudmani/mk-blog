import { useState } from 'react'
import {
  Header,
  Text,
  ActionIcon,
  useMantineColorScheme,
  Modal,
  Container,
  Burger,
  Group,
} from '@mantine/core'
import Link from 'next/link'
import useStyle from './navbarStyle'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/router'
import { useBooleanToggle, useMediaQuery } from '@mantine/hooks'

function Navbar() {
  const { classes, cx } = useStyle()

  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const [isOpened, setOpened] = useBooleanToggle(false)

  const dark = colorScheme === 'dark'

  const matchXs = useMediaQuery('(min-width: 576px)')

  return (
    <>
      <Header
        height={80}
        sx={{
          border: 0,
          backgroundColor: 'transparent',
        }}
      >
        <Container
          padding='lg'
          size='1440px'
          className={classes.navbarContainer}
        >
          <Text mr='lg'>Logo</Text>
          {matchXs && (
            <Links
              linkClass={classes.linkClass}
              linkActiveClass={classes.linkActiveClass}
              cx={cx}
            />
          )}
          <LightDarkMode
            dark={dark}
            toggleColorScheme={toggleColorScheme}
            className={classes.toggleDarkMode}
          />
          <Burger
            opened={isOpened}
            onClick={() => setOpened()}
            className={classes.burger}
          />
        </Container>
      </Header>
      <Modal
        opened={isOpened}
        onClose={() => setOpened()}
        className={classes.menuModal}
        hideCloseButton
      >
        <LightDarkMode
          dark={dark}
          toggleColorScheme={toggleColorScheme}
          className={classes.menuToggleDarkMode}
        />
        <Links
          linkClass={classes.linkClass}
          linkActiveClass={classes.linkActiveClass}
          cx={cx}
          isMenu={true}
        />
      </Modal>
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

function Links(props) {
  const { linkActiveClass, cx, linkClass, isMenu } = props

  const router = useRouter()

  const links = [
    { id: 0, label: 'Home', href: '/' },
    { id: 1, label: 'Hello', href: '/hello' },
    { id: 2, label: 'World', href: '/world' },
  ]

  const currentTab = () => {
    if (router.route === '/') return 0
    else if (router.route === '/hello') return 1
    else if (router.route === '/world') return 2
  }

  const [active, setActive] = useState(currentTab)

  return (
    <Group
      spacing='lg'
      mr='auto'
      position='center'
      direction={isMenu ? 'column' : 'row'}
    >
      {links.map((link) => (
        <Link passHref key={link.id} href={link.href}>
          <Text
            className={cx(linkClass, {
              [linkActiveClass]: active === link.id,
            })}
            onClick={(event) => {
              setActive(link.id)
            }}
            component='a'
          >
            {link.label}
          </Text>
        </Link>
      ))}
    </Group>
  )
}

export default Navbar
