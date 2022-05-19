import Hero from '../components/home/Hero'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'

function GamingPage(props) {
  const { posts } = props

  console.log(posts)

  return (
    <>
      <Head>
        <title>Web Development</title>
      </Head>
      <Hero posts={posts} />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const files = fs.readdirSync(path.join('posts-web'))

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')

    const markDownWrite = fs.readFileSync(
      path.join('posts-web', fileName),
      'utf-8'
    )

    const { data } = matter(markDownWrite)

    return { slug, data }
  })

  return {
    props: {
      posts,
    },
  }
}

export default GamingPage
