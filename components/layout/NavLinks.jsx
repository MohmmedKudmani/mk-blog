import Link from 'next/link'
import { useRouter } from 'next/router'
import { Text, Box } from '@mantine/core'
import { useState } from 'react'

function NavLinks(props) {
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

export default NavLinks
