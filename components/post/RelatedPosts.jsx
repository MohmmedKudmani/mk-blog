import { Box, Group, Card, Text } from '@mantine/core'
import Image from 'next/image'
import { useRouter } from 'next/router'

function RelatedPosts(props) {
  const { posts, slug, matchLg } = props
  const postSelected = posts.filter((post) => post.postsSlug === slug)
  const postsRelated = posts.filter(
    (post) =>
      post.data.category === postSelected[0].data.category &&
      post.postsSlug !== slug
  )
  const router = useRouter()

  return (
    <Card
      sx={{
        paddingBottom: '0 !important',
        width: matchLg ? '100%' : '400px',
      }}
      p='md'
      radius='md'
      shadow='xl'
    >
      <Card.Section p='md'>
        <Text
          sx={{
            borderBottom: '0.5px #333 solid',
          }}
          pb='xs'
          size='lg'
        >
          Related Posts
        </Text>
      </Card.Section>
      {postsRelated.map((postRelated) => (
        <Group
          sx={{
            '&:active': {
              transform: 'scale(.98)',
            },
            cursor: 'pointer',
          }}
          mb='lg'
          onClick={() => router.push(`/post/${postRelated.postsSlug}`)}
          key={postRelated.data.title}
        >
          <Image
            alt='user'
            width={45}
            height={45}
            src={postRelated.data.avatar}
            className='nextImageAvatar'
          />
          <Box>
            <Text>{postRelated.data.date}</Text>
            <Text>{postRelated.data.title}</Text>
          </Box>
        </Group>
      ))}
    </Card>
  )
}

export default RelatedPosts
