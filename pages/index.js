import Hero from '../components/home/Hero'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'

function HomePage(props) {
  const { allPosts } = props

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero posts={allPosts} />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const filesWeb = fs.readdirSync(path.join('posts-web'))
  const filesGaming = fs.readdirSync(path.join('posts-gaming'))
  const filesTechnology = fs.readdirSync(path.join('posts-tech'))

  const postsWeb = filesWeb.map((fileName) => {
    const slug = fileName.replace('.md', '')

    const markDownWrite = fs.readFileSync(
      path.join('posts-web', fileName),
      'utf-8'
    )

    const { data } = matter(markDownWrite)

    return { slug, data }
  })

  const postsGaming = filesGaming.map((fileName) => {
    const slug = fileName.replace('.md', '')

    const markDownWrite = fs.readFileSync(
      path.join('posts-gaming', fileName),
      'utf-8'
    )

    const { data } = matter(markDownWrite)

    return { slug, data }
  })

  const postsTechnology = filesTechnology.map((fileName) => {
    const slug = fileName.replace('.md', '')

    const markDownWrite = fs.readFileSync(
      path.join('posts-tech', fileName),
      'utf-8'
    )

    const { data } = matter(markDownWrite)

    return { slug, data }
  })

  const allPosts = [...postsWeb, ...postsGaming, ...postsTechnology]

  return {
    props: {
      allPosts,
    },
  }
}

export default HomePage
