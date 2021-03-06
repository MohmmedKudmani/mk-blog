import { Box, Container } from '@mantine/core'
import Card from '../util/Card'
import dynamic from 'next/dynamic'
const CardFeatured = dynamic(() => import('../util/CardFeatured'), {
  loading: () => <p>loading...</p>,
})

function Hero(props) {
  const { posts } = props

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
      >
        <Container px='xl' size='1550px'>
          <CardFeatured posts={posts} />
          <Card posts={posts} />
        </Container>
      </Box>
    </>
  )
}

export default Hero
