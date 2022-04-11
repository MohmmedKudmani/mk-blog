import { Box, Group, Card, Text, Avatar } from '@mantine/core'
import CardPost from '../util/CardPost'

function Post(props) {
  const { posts, slug } = props
  const postSelected = posts.filter((post) => post.postsSlug === slug)
  const postsRelated = posts.filter(
    (post) => post.data.category === postSelected[0].data.category
  )

  return (
    <Box
      sx={(theme) => ({
        marginLeft: '16.9rem',
        marginTop: '6rem',
        [theme.fn.smallerThan('md')]: {
          marginLeft: '0',
        },
      })}
      px='md'
    >
      <Group grow align='flex-start'>
        <CardPost posts={posts} slug={slug} />
        <Box>
          <Card
            sx={{
              paddingBottom: '0 !important',
            }}
            p='md'
            radius='md'
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
              <Group mb='lg' key={postRelated.data.title}>
                <Avatar src={postRelated.data.avatar} size='lg' radius='xl' />
                <Box>
                  <Text>{postRelated.data.date}</Text>
                  <Text>{postRelated.data.title}</Text>
                </Box>
              </Group>
            ))}
          </Card>
          <Card radius='md' mt='lg'>
            <Card.Section p='md'>
              <Text
                sx={{
                  borderBottom: '0.5px #333 solid',
                }}
                size='lg'
                pb='xs'
              >
                Leave a Reply
              </Text>
            </Card.Section>
          </Card>
        </Box>
      </Group>
    </Box>
  )
}

export default Post
