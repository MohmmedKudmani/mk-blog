import { Box } from '@mantine/core'
import { useNotifications } from '@mantine/notifications'
import Card from '../util/Card'
import CardFeatured from '../util/CardFeatured'

function Hero(props) {
  const { posts } = props
  const { showNotification } = useNotifications()

  const clickMeNotification = () => {
    return showNotification({
      title: 'Hello World',
      message: 'Welcome To My Boilerplate',
    })
  }

  return (
    <>
      <Box
        sx={(theme) => ({
          marginLeft: '16.9rem',
          marginTop: '6.3rem',
          [theme.fn.smallerThan('md')]: {
            marginLeft: '0',
          },
        })}
        px='md'
      >
        <CardFeatured posts={posts} />
        <Card posts={posts} />
      </Box>
    </>
  )
}

export default Hero
