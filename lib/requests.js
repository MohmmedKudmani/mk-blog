import axios from 'axios'

export async function postComment(comment) {
  const { data } = await axios.post('/api/comment', comment)
  return data
}

export async function getComment({ queryKey }) {
  const slug = queryKey[1]
  const { data } = await axios.get('/api/comment', {
    headers: {
      slug: slug,
    },
  })
  return data
}

export async function deleteComment(id) {
  const { data } = await axios.delete('/api/comment', {
    headers: {
      id: id,
    },
  })
  return data
}
