import { Box, Group, Container } from '@mantine/core'
import CardPost from '../util/CardPost'
import { useMediaQuery, useDisclosure } from '@mantine/hooks'
import { useSession } from 'next-auth/react'
import { useRef, useState } from 'react'
import { postComment, getComment } from '../../lib/requests'
import dayjs from 'dayjs'
import { showNotification } from '@mantine/notifications'
import { useQuery } from 'react-query'
import { IconCheck, IconX } from '@tabler/icons'
import RelatedPosts from './RelatedPosts'
// import Comments from './Comments'
// import CommentModal from './CommentModal'

function Post(props) {
  const { posts, slug } = props
  const matchLg = useMediaQuery('(max-width: 1350px)')
  const [opened, handlers] = useDisclosure(false)
  const { data: session, status } = useSession()
  const commentRef = useRef()
  const {
    data,
    status: queryStatus,
    refetch,
  } = useQuery(['comments', slug], getComment)
  const [selectedItemReplay, setSelectedItemReplay] = useState('')

  const commentHandler = async (e, selectedItemReplay) => {
    e.preventDefault()

    const comment = {
      comment: commentRef.current.value,
      userName: session.user.name,
      userImage: session.user.image,
      date: dayjs().format('DD/MM/YYYY'),
      path: slug,
      replayId: selectedItemReplay ? selectedItemReplay : false,
    }

    const message = await postComment(comment)

    if (message.error) {
      showNotification({
        title: 'Error',
        message: message.message,
        icon: <IconX size={18} />,
        color: 'red',
      })
    } else {
      showNotification({
        title: 'Succeed',
        message: message.message,
        icon: <IconCheck size={18} />,
        color: 'green',
      })
    }

    commentRef.current.value = ''

    refetch()

    handlers.close()
  }

  return (
    <>
      <Box
        sx={(theme) => ({
          marginLeft: '16.9rem',
          marginTop: '6rem',
          [theme.fn.smallerThan('md')]: {
            marginLeft: '0',
          },
        })}
      >
        <Container px='xl' size='1550px'>
          <Group
            grow
            noWrap
            direction={matchLg ? 'column' : 'row'}
            align='flex-start'
          >
            <CardPost posts={posts} slug={slug} />
            <Box
              sx={{
                width: matchLg ? '100%' : '400px',
              }}
            >
              <RelatedPosts matchLg={matchLg} posts={posts} slug={slug} />
              {/* <Comments
                comments={data?.comments}
                queryStatus={queryStatus}
                matchLg={matchLg}
                handlers={handlers}
                refetch={refetch}
                session={session}
                setSelectedItemReplay={setSelectedItemReplay}
              /> */}
            </Box>
          </Group>
        </Container>
      </Box>
      {/* <CommentModal
        commentHandler={commentHandler}
        handlers={handlers}
        opened={opened}
        commentRef={commentRef}
        session={session}
        selectedItemReplay={selectedItemReplay}
        setSelectedItemReplay={setSelectedItemReplay}
      /> */}
    </>
  )
}

export default Post
