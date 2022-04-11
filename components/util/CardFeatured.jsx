import {
  Center,
  Text,
  Box,
  BackgroundImage,
  Avatar,
  ActionIcon,
} from '@mantine/core'
import Carousel from 'react-elastic-carousel'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

function CardFeatured(props) {
  const { posts } = props

  const breakPoints = [
    { width: 350, itemsToShow: 1 },
    { width: 450, itemsToShow: 2 },
    { width: 700, itemsToShow: 3 },
    { width: 950, itemsToShow: 4 },
    { width: 1250, itemsToShow: 5 },
    { width: 1350, itemsToShow: 6 },
  ]

  return (
    <Carousel
      enableAutoPlay
      autoPlaySpeed={1500}
      breakPoints={breakPoints}
      itemsToShow={4}
      pagination={false}
      renderArrow={({ type, onClick, isEdge }) =>
        type === 'PREV' ? (
          <ActionIcon
            onClick={onClick}
            disabled={isEdge}
            sx={{
              position: 'relative',
              top: '4.7rem',
              cursor: 'pointer',
            }}
            radius='xl'
          >
            <ArrowLeftIcon />
          </ActionIcon>
        ) : (
          <ActionIcon
            onClick={onClick}
            disabled={isEdge}
            sx={{
              position: 'relative',
              top: '4.7rem',
              cursor: 'pointer',
            }}
            radius='xl'
          >
            <ArrowRightIcon />
          </ActionIcon>
        )
      }
    >
      {posts?.map((post) => {
        return (
          <Box key={post.data.title} sx={{ maxWidth: 300 }} mx='auto'>
            <BackgroundImage
              sx={{
                width: '230px',
                height: '175px',
                objectFit: 'cover',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '0 0.5rem',
                cursor: 'pointer',
              }}
              src={post.data.image}
              radius='sm'
            >
              <Center>
                <Text color='#fff'>{post.data.date}</Text>
              </Center>
              <Center>
                <Text color='#fff'>{post.data.title}</Text>
              </Center>
              <Center>
                <Avatar mr='xs' size='sm' src={post?.data.avatar} radius='xl' />
                <Text size='sm' color='#fff'>
                  {post.data.userName}
                </Text>
              </Center>
            </BackgroundImage>
          </Box>
        )
      })}
    </Carousel>
  )
}

export default CardFeatured
