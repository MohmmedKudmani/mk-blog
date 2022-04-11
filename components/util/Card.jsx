import {
  Card as MantineCard,
  Text,
  SimpleGrid,
  Group,
  Avatar,
  Center,
  Button,
} from '@mantine/core'
import Image from 'next/image'
import { CalendarIcon } from '@radix-ui/react-icons'
import { useMediaQuery } from '@mantine/hooks'
import { useRouter } from 'next/router'

function Card(props) {
  const { posts } = props
  const matchMd = useMediaQuery('(max-width: 740px)')
  const router = useRouter()

  return (
    <SimpleGrid mt='lg' cols={2}>
      {posts.map((post) => (
        <MantineCard key={post.data.title} shadow='sm' p='sm' radius='lg'>
          <MantineCard.Section p='sm'>
            <Image
              src={post.data.image}
              layout='responsive'
              width={300}
              height={150}
              alt='image'
              className='nextImage'
            />
          </MantineCard.Section>

          <Center
            sx={{
              fontSize: '1.5rem',
              textAlign: 'center',
            }}
            weight={500}
          >
            {post.data.title}
          </Center>
          <Group
            my='0.7rem'
            spacing={matchMd ? '0' : 'lg'}
            align='center'
            mt={matchMd && '0.3rem'}
            direction={matchMd ? 'column' : 'row'}
            position='center'
          >
            <Group spacing='xs'>
              <Avatar radius='xl' src={post?.data.avatar} />
              <Text size='sm' color='#fff'>
                {post.data.userName}
              </Text>
            </Group>
            <Group spacing='xs'>
              <CalendarIcon />
              <Text>{post.data.date}</Text>
            </Group>
          </Group>

          <Text
            sx={{
              width: '80%',
            }}
            mx='auto'
            size='sm'
            align='center'
          >
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>
          <Button
            sx={{
              display: 'flex',
            }}
            radius='xl'
            mt='lg'
            mb='xs'
            mx='auto'
            onClick={() => router.push(`/post/${post.slug}`)}
          >
            Continue Reading
          </Button>
        </MantineCard>
      ))}
    </SimpleGrid>
  )
}

export default Card
