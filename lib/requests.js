import axios from 'axios'

export async function getUser() {
  const { data } = await axios.get('any-data.com:)')
  return data
}
