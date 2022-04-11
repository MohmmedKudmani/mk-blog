import Hero from '../components/home/Hero'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function HomePage(props) {
  const { posts } = props

  return <Hero posts={posts} />
}

export const getStaticProps = async (ctx) => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')

    const markDownWrite = fs.readFileSync(path.join('posts', fileName), 'utf-8')

    const { data } = matter(markDownWrite)

    return { slug, data }
  })

  return {
    props: {
      posts,
    },
  }
}

export default HomePage
