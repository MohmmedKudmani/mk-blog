import {
  Navbar as MantineNavbar,
  Text,
  Group,
  Button,
  Popover,
} from '@mantine/core'
import useStyle from './navbarStyle'
import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import GoogleIcon from '../../public/svg/GoogleIcon'
import Image from 'next/image'
import NavLinks from './NavLinks'

function Navbar(props) {
  const { isOpened, setIsOpened } = props
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
      width={{ md: 270 }}
    >
      <MantineNavbar.Section grow>
        <Text className={classes.title}>Categories</Text>
        <NavLinks
          linkClass={classes.linkClass}
          linkActiveClass={classes.linkActiveClass}
          cx={cx}
          setIsOpened={setIsOpened}
        />
      </MantineNavbar.Section>

      <MantineNavbar.Section className={classes.footer}>
        {status === 'authenticated' ? (
          <>
            <Popover
              target={
                <Image
                  width={40}
                  height={40}
                  src={session?.user.image}
                  onClick={() => setOpened((o) => !o)}
                  alt='user'
                  className='nextImageAvatarUser'
                />
              }
              mt='9px'
              mr='xs'
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

export default Navbar
