import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../../components/post/Post'
import Head from 'next/head'

function PostPage(props) {
  const { posts, slug } = props
  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <Post posts={posts} slug={slug} />
    </>
  )
}

export const getStaticPaths = async () => {
  const filesWeb = fs.readdirSync(path.join('posts-web'))
  const filesGaming = fs.readdirSync(path.join('posts-gaming'))
  const filesTechnology = fs.readdirSync(path.join('posts-tech'))

  const pathsWeb = filesWeb.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))

  const pathsGaming = filesGaming.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))

  const pathTechnology = filesTechnology.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))

  const params = [...pathsWeb, ...pathsGaming, ...pathTechnology]

  return {
    paths: params,
    fallback: false,
  }
}

export const getStaticProps = async (ctx) => {
  const slug = ctx.params.slug

  const filesWeb = fs.readdirSync(path.join('posts-web'))
  const filesGaming = fs.readdirSync(path.join('posts-gaming'))
  const filesTechnology = fs.readdirSync(path.join('posts-tech'))

  const postsWeb = filesWeb.map((fileName) => {
    const postsSlug = fileName.replace('.md', '')

    const markDownWrite = fs.readFileSync(
      path.join('posts-web', fileName),
      'utf-8'
    )

    const { data, content } = matter(markDownWrite)

    return { postsSlug, data, content }
  })

  const postsGaming = filesGaming.map((fileName) => {
    const postsSlug = fileName.replace('.md', '')

    const markDownWrite = fs.readFileSync(
      path.join('posts-gaming', fileName),
      'utf-8'
    )

    const { data, content } = matter(markDownWrite)

    return { postsSlug, data, content }
  })

  const postsTechnology = filesTechnology.map((fileName) => {
    const postsSlug = fileName.replace('.md', '')

    const markDownWrite = fs.readFileSync(
      path.join('posts-tech', fileName),
      'utf-8'
    )

    const { data, content } = matter(markDownWrite)

    return { postsSlug, data, content }
  })

  const posts = [...postsWeb, ...postsGaming, ...postsTechnology]

  return {
    props: {
      posts,
      slug,
    },
  }
}

export default PostPage
