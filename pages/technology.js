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
        <title>Technology</title>
      </Head>
      <Hero posts={posts} />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const files = fs.readdirSync(path.join('posts-tech'))

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')

    console.log(fileName)

    const markDownWrite = fs.readFileSync(
      path.join('posts-tech', fileName),
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
