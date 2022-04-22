import { Group, Text, Modal, Button } from '@mantine/core'
import { useMutation } from 'react-query'
import { deleteComment } from '../../lib/requests'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons'

function DeleteCommentModal(props) {
  const { modalDeleteComment, modalDeleteHandler, selectedItem, refetch } =
    props
  const {
    mutateAsync: delComment,
    isSuccess,
    isLoading,
  } = useMutation('deleteComments', deleteComment)

  const deleteCommentModalHandler = async () => {
    const message = await delComment(selectedItem)
    showNotification({
      title: 'Succeed',
      icon: <IconCheck size={18} />,
      color: 'green',
      message: message.message,
    })
    modalDeleteHandler.close()
    refetch()
  }

  return (
    <Modal
      title='Want To Delete Your Comment ?'
      onClose={() => {
        modalDeleteHandler.close()
      }}
      opened={modalDeleteComment}
      centered
    >
      <Group spacing='lg' grow>
        <Button onClick={deleteCommentModalHandler}>Yes</Button>
        <Button
          onClick={() => {
            modalDeleteHandler.close()
          }}
        >
          No
        </Button>
      </Group>
    </Modal>
  )
}

export default DeleteCommentModal
