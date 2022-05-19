import Link from 'next/link'
import { useRouter } from 'next/router'
import { Text, Box } from '@mantine/core'
import { useState } from 'react'
import { useMediaQuery } from '@mantine/hooks'

function NavLinks(props) {
  const { linkActiveClass, cx, linkClass, setIsOpened } = props
  const matchMd = useMediaQuery('(max-width: 992px)')

  const router = useRouter()

  const links = [
    { id: 0, label: 'Home', href: '/' },
    { id: 1, label: 'Web Development', href: '/web-development' },
    { id: 2, label: 'Gaming', href: '/gaming' },
    { id: 3, label: 'Technology', href: '/technology' },
  ]

  const currentTab = () => {
    if (router.route === '/') return 0
    else if (router.route === '/web-development') return 1
    else if (router.route === '/gaming') return 2
    else if (router.route === '/technology') return 3
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
              matchMd && setIsOpened(false)
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

export default NavLinks
