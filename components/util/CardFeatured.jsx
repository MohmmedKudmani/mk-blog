import { Center, Text, Box, BackgroundImage, ActionIcon } from '@mantine/core'
import Carousel from 'react-elastic-carousel'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons'
import Image from 'next/image'
import { useRouter } from 'next/router'

function CardFeatured(props) {
  const { posts } = props
  const router = useRouter()

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
            sx={(theme) => ({
              position: 'relative',
              top: '4.7rem',
              cursor: 'pointer',
              color:
                theme.colorScheme === 'dark'
                  ? theme.other.darkSecondary
                  : theme.other.lightSecondary,
              backgroundColor: theme.colorScheme === 'light' && '#dedede',
            })}
            radius='xl'
            variant='filled'
          >
            <IconArrowLeft size={18} />
          </ActionIcon>
        ) : (
          <ActionIcon
            onClick={onClick}
            disabled={isEdge}
            variant='filled'
            sx={(theme) => ({
              position: 'relative',
              top: '4.7rem',
              cursor: 'pointer',
              color:
                theme.colorScheme === 'dark'
                  ? theme.other.darkSecondary
                  : theme.other.lightSecondary,
              backgroundColor: theme.colorScheme === 'light' && '#dedede',
            })}
            radius='xl'
          >
            <IconArrowRight size={18} />
          </ActionIcon>
        )
      }
    >
      {posts?.map((post) => {
        return (
          <Box key={post.data.title} sx={{ width: '100%' }}>
            <BackgroundImage
              sx={{
                width: '93%',
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
              mx='auto'
              onClick={() => router.push(`/post/${post.slug}`)}
            >
              <Center>
                <Text color='#fff'>{post.data.date}</Text>
              </Center>
              <Center>
                <Text color='#fff'>{post.data.title}</Text>
              </Center>
              <Center>
                <Image
                  width={27}
                  height={27}
                  alt='user'
                  src={post?.data.avatar}
                  className='nextImageAvatar'
                />
                <Text ml='xs' size='sm' color='#fff'>
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
