import Hero from '../components/Home/Hero'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'

function GamingPage(props) {
  const { posts } = props

  return (
    <>
      <Head>
        <title>Gaming</title>
      </Head>
      <Hero posts={posts} />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const files = fs.readdirSync(path.join('posts-gaming'))

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')

    const markDownWrite = fs.readFileSync(
      path.join('posts-gaming', fileName),
      'utf-8'
    )

    const { data, content } = matter(markDownWrite)

    return { slug, data, content }
  })

  return {
    props: {
      posts,
    },
  }
}

export default GamingPage
