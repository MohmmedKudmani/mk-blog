import { Group, Text, Modal, Textarea, Button } from '@mantine/core'
import Image from 'next/image'
import { showNotification } from '@mantine/notifications'

function CommentModal(props) {
  const {
    opened,
    handlers,
    commentHandler,
    session,
    commentRef,
    selectedItemReplay,
    setSelectedItemReplay,
  } = props

  return (
    <Modal
      title={'Leave A Comment'}
      onClose={() => {
        handlers.close()
        setSelectedItemReplay('')
      }}
      opened={opened}
      centered
    >
      <form
        onSubmit={
          selectedItemReplay
            ? (e) => commentHandler(e, selectedItemReplay)
            : (e) => commentHandler(e)
        }
      >
        <Textarea
          ref={commentRef}
          autosize
          minRows={6}
          placeholder='Your comment'
          required
        />
        <Group my='md'>
          <Image
            alt='user'
            width={35}
            height={35}
            src={session?.user.image}
            className='nextImageAvatar'
          />
          <Text>{session?.user.name}</Text>
        </Group>
        <Button
          onClick={() => {
            setTimeout(() => {
              setSelectedItemReplay('')
            }, 100)
          }}
          fullWidth
          type='submit'
        >
          Submit
        </Button>
      </form>
    </Modal>
  )
}

export default CommentModal
