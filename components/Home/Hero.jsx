import { Button, Container } from '@mantine/core'
import { useNotifications } from '@mantine/notifications'

function Hero() {
  const { showNotification } = useNotifications()

  const clickMeNotification = () => {
    return showNotification({
      title: 'Hello World',
      message: 'Welcome To My Boilerplate',
    })
  }

  return (
    <>
      <Container padding='lg' size='1440px'>
        <Button onClick={clickMeNotification}>Click me :)</Button>
      </Container>
    </>
  )
}

export default Hero
