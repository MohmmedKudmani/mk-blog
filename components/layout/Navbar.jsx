import {
  Navbar as MantineNavbar,
  Text,
  Box,
  Avatar,
  Group,
  Button,
  Popover,
} from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useStyle from './navbarStyle'
import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import GoogleIcon from '../../public/svg/GoogleIcon'

function Navbar(props) {
  const { isOpened } = props
  const { classes, cx } = useStyle()
  const { data: session, status } = useSession()
  const [opened, setOpened] = useState(false)

  return (
    <MantineNavbar
      p='md'
      sx={(theme) => ({
        [theme.fn.smallerThan('sm')]: {
          top: '5rem',
        },
        padding: '0 0.8rem',
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.other.darkPrimary
            : theme.other.lightPrimary,
      })}
      // Breakpoint at which navbar will be hidden if hidden prop is true
      hiddenBreakpoint='md'
      // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
      hidden={!isOpened}
      // when viewport size is less than theme.breakpoints.sm navbar width is 100%
      // viewport size > theme.breakpoints.sm – width is 300px
      // viewport size > theme.breakpoints.lg – width is 400px
      width={{ sm: 270, md: 270 }}
    >
      <MantineNavbar.Section grow>
        <Text className={classes.title}>Categories</Text>
        <Links
          linkClass={classes.linkClass}
          linkActiveClass={classes.linkActiveClass}
          cx={cx}
        />
      </MantineNavbar.Section>

      <MantineNavbar.Section className={classes.footer}>
        {status === 'authenticated' ? (
          <>
            <Popover
              target={
                <Avatar
                  onClick={() => setOpened((o) => !o)}
                  sx={{
                    cursor: 'pointer',
                    '.mantine-tzt201': {
                      marginLeft: '1rem !important',
                    },
                  }}
                  src={session?.user.image}
                  alt='avatar'
                  mr='xs'
                  radius='xl'
                  size='md'
                />
              }
              width={270}
              position='top'
              withArrow
              opened={opened}
              onClose={() => setOpened(false)}
            >
              <Button onClick={() => signOut('google')} fullWidth>
                Sign Out
              </Button>
            </Popover>
            <Group direction='column' spacing='-0.1rem'>
              <Text size='sm'>{session.user.name}</Text>
              <Text size='sm'>{session.user.email}</Text>
            </Group>
          </>
        ) : (
          <Button
            leftIcon={<GoogleIcon />}
            fullWidth
            onClick={() => signIn('google')}
          >
            Sign In With Google
          </Button>
        )}
      </MantineNavbar.Section>
    </MantineNavbar>
  )
}

function Links(props) {
  const { linkActiveClass, cx, linkClass } = props

  const router = useRouter()

  const links = [
    { id: 0, label: 'Home', href: '/' },
    { id: 1, label: 'Web Development', href: '/hello' },
    { id: 2, label: 'Gaming', href: '/world' },
    { id: 3, label: 'Technology', href: '/world' },
  ]

  const currentTab = () => {
    if (router.route === '/') return 0
    else if (router.route === '/hello') return 1
    else if (router.route === '/world') return 2
  }

  const [active, setActive] = useState(currentTab)

  return (
    <Box>
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
    </Box>
  )
}

export default Navbar
