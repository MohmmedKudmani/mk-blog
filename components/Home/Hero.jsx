import { Box, Container, Loader, useMantineTheme } from '@mantine/core'
import Card from '../util/Card'
import { useState, useEffect } from 'react'
import CardFeatured from '../util/CardFeatured'

function Hero(props) {
  const { posts } = props
  const [loading, setLoading] = useState(false)
  const theme = useMantineTheme()

  useEffect(() => {
    setTimeout(() => setLoading(true), 1000)
  })

  return (
    <>
      <Box
        sx={{
          marginLeft: '16.9rem',
          marginTop: '6.3rem',
          [theme.fn.smallerThan('md')]: {
            marginLeft: '0',
          },
        }}
      >
        <Container px='xl' size='1550px'>
          {loading ? (
            <CardFeatured posts={posts} />
          ) : (
            <Loader
              color={
                theme.colorScheme === 'dark'
                  ? theme.other.darkSecondary
                  : theme.other.lightSecondary
              }
              sx={{ margin: '1rem auto', width: '100%' }}
            />
          )}
          <Card posts={posts} />
        </Container>
      </Box>
    </>
  )
}

export default Hero
