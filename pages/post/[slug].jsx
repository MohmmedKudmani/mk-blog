import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../../components/post/Post'

function PostPage(props) {
  const { posts, slug } = props
  return <Post posts={posts} slug={slug} />
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (ctx) => {
  const slug = ctx.params.slug

  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((fileName) => {
    const postsSlug = fileName.replace('.md', '')

    const markDownWrite = fs.readFileSync(path.join('posts', fileName), 'utf-8')

    const { data, content } = matter(markDownWrite)

    return { postsSlug, data, content }
  })

  return {
    props: {
      posts,
      slug,
    },
  }
}

export default PostPage
