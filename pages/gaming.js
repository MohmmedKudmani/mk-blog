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

    console.log(fileName)

    const markDownWrite = fs.readFileSync(
      path.join('posts-gaming', fileName),
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
