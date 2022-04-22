import { IconTrash, IconCirclePlus, IconArrowBack, IconX } from '@tabler/icons'
import {
  Box,
  Group,
  Text,
  ActionIcon,
  Card,
  Center,
  Loader,
  useMantineTheme,
} from '@mantine/core'
import Image from 'next/image'
import DeleteCommentModal from './DeleteCommentModal'
import { useDisclosure, useColorScheme } from '@mantine/hooks'
import { useState } from 'react'
import { showNotification } from '@mantine/notifications'

function Comments(props) {
  const {
    comments,
    queryStatus,
    matchLg,
    handlers,
    refetch,
    session,
    setSelectedItemReplay,
  } = props

  const [modalDeleteComment, modalDeleteHandler] = useDisclosure(false)
  const [selectedItem, setSelectedItem] = useState('')

  const notReplayedComments = comments?.filter(
    (comment) => comment.replayId === false
  )
  const ReplayedComments = comments?.filter(
    (comment) => !!comment.replayId === true
  )

  const theme = useMantineTheme()

  return (
    <>
      <Card radius='md' shadow='xl' mt='lg'>
        <Card.Section p='md'>
          <Group
            sx={{
              borderBottom: '0.5px #333 solid',
            }}
            spacing='7px'
            pb='xs'
          >
            <Text size='lg'>Leave a Comment</Text>
            <ActionIcon
              onClick={() => {
                if (session) {
                  handlers.open()
                } else {
                  showNotification({
                    title: 'Error',
                    message: 'Please LogIn With Your Google Account',
                    icon: <IconX size={18} />,
                    color: 'red',
                  })
                }
              }}
              variant='transparent'
              radius='xl'
            >
              <IconCirclePlus size={30} />
            </ActionIcon>
          </Group>
        </Card.Section>
        {queryStatus === 'loading' && (
          <Center>
            <Loader
              color={
                theme.colorScheme === 'dark'
                  ? theme.other.darkSecondary
                  : theme.other.lightSecondary
              }
            />
          </Center>
        )}
        {queryStatus === 'error' && <Center>Server Error</Center>}
        {queryStatus === 'success' &&
          notReplayedComments.map((comment) => (
            <>
              <Box key={comment._id}>
                <Group align='start' position='apart'>
                  <Group align='start'>
                    <Image
                      width={45}
                      height={45}
                      src={comment.userImage}
                      alt={comment.userName}
                      className='nextImageAvatar'
                    />
                    <Box>
                      <Text size='sm'>{comment.userName}</Text>
                      <Text size='xs' color='dimmed'>
                        {comment.date}
                      </Text>
                    </Box>
                  </Group>
                  <Group spacing='0px'>
                    {session && (
                      <ActionIcon
                        onClick={() => {
                          setSelectedItemReplay(comment._id)
                          handlers.open()
                        }}
                      >
                        <IconArrowBack size={20} />
                      </ActionIcon>
                    )}

                    {session?.user.name === comment.userName && (
                      <ActionIcon
                        onClick={() => {
                          modalDeleteHandler.open()
                          setSelectedItem(comment._id)
                        }}
                      >
                        <IconTrash size={20} />
                      </ActionIcon>
                    )}
                  </Group>
                </Group>
                <Text
                  sx={{
                    overflowWrap: matchLg ? 'anywhere' : 'break-word',
                    fontWeight: 400,
                  }}
                  pl='62px'
                  pb='md'
                  size='sm'
                >
                  {comment.comment}
                </Text>
              </Box>
              {ReplayedComments.map((comment2) => {
                if (comment._id === comment2.replayId) {
                  return (
                    <Box pl={60} key={comment2._id}>
                      <Group align='start' position='apart'>
                        <Group align='start'>
                          <Image
                            width={45}
                            height={45}
                            src={comment2.userImage}
                            alt={comment2.userName}
                            className='nextImageAvatar'
                          />
                          <Box>
                            <Text size='sm'>{comment2.userName}</Text>
                            <Text size='xs' color='dimmed'>
                              {comment2.date}
                            </Text>
                          </Box>
                        </Group>
                        <Box>
                          {session?.user.name === comment2.userName && (
                            <ActionIcon
                              onClick={() => {
                                modalDeleteHandler.open()
                                setSelectedItem(comment2._id)
                              }}
                            >
                              <IconTrash size={20} />
                            </ActionIcon>
                          )}
                        </Box>
                      </Group>
                      <Text
                        sx={{
                          overflowWrap: matchLg ? 'anywhere' : 'break-word',
                          fontWeight: 400,
                        }}
                        pl='62px'
                        pb='md'
                        size='sm'
                      >
                        {comment2.comment}
                      </Text>
                    </Box>
                  )
                }
              })}
            </>
          ))}
      </Card>
      <DeleteCommentModal
        modalDeleteComment={modalDeleteComment}
        modalDeleteHandler={modalDeleteHandler}
        selectedItem={selectedItem}
        refetch={refetch}
      />
    </>
  )
}

export default Comments
