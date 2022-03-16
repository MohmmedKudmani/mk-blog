import Document from 'next/document'
import { ServerStyles, createStylesServer } from '@mantine/next'

const stylesServer = createStylesServer()

class _Document extends Document {
  static async getStaticProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles html={initialProps.html} server={stylesServer} />
        </>
      ),
    }
  }
}

export default _Document
