import { Box, Container, Loader } from '@mantine/core'
import Card from '../util/Card'
import { useState, useEffect } from 'react'
import CardFeatured from '../util/CardFeatured'

function Hero(props) {
  const { posts } = props
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(true), 1000)
  })

  Loader
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
          {loading ? (
            <CardFeatured posts={posts} />
          ) : (
            <Loader sx={{ margin: '1rem auto', width: '100%' }} />
          )}
          <Card posts={posts} />
        </Container>
      </Box>
    </>
  )
}

export default Hero
