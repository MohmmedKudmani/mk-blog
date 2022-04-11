import Head from 'next/head'
import Layout from '../components/layout/Layout'
import '../components/nextImageStyle.css'
import { SessionProvider } from 'next-auth/react'

export default function App(props) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props

  return (
    <>
      <Head>
        <title>m7-boilarBlate</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  )
}
