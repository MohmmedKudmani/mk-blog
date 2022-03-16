import Head from 'next/head'
import Layout from '../components/layout/Layout'

export default function App(props) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>m7-boilarBlate</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
