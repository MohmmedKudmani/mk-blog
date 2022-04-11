import { Card, Text } from '@mantine/core'
import Image from 'next/image'

function CardPost(props) {
  const { posts, slug } = props
  const post = posts.filter((post) => post.postsSlug === slug)
  return (
    <>
      <Card
        sx={{
          width: '70%',
        }}
        radius='md'
      >
        <Card.Section p='md'>
          <Image
            src={post[0].data.image}
            layout='responsive'
            width={300}
            height={150}
            alt='image'
            className='nextImage'
          />
        </Card.Section>
        <Text>{post[0].content}</Text>
      </Card>
    </>
  )
}

export default CardPost
