import {
  Card as MantineCard,
  Text,
  SimpleGrid,
  Group,
  Center,
  Button,
} from '@mantine/core'
import Image from 'next/image'
import { useMediaQuery } from '@mantine/hooks'
import { useRouter } from 'next/router'
import { IconCalendar } from '@tabler/icons'

function Card(props) {
  const { posts } = props
  const matchMd = useMediaQuery('(max-width: 740px)')
  const router = useRouter()

  return (
    <SimpleGrid mt='lg' cols={matchMd ? 1 : 2}>
      {posts.map((post) => (
        <MantineCard key={post.data.title} shadow='xl' p='sm' radius='lg'>
          <MantineCard.Section
            onClick={() => router.push(`/post/${post.slug}`)}
            mb='1rem'
          >
            <Image
              src={post.data.image}
              layout='responsive'
              width={200}
              height={100}
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
              <Image
                width={35}
                height={35}
                alt='user'
                src={post?.data.avatar}
                className='nextImageAvatar'
              />
              <Text size='sm'>{post.data.userName}</Text>
            </Group>
            <Group spacing='xs'>
              <IconCalendar size={18} />
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
