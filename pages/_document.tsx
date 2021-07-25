import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { prefix } from '../utils/prefix'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Chukwuma Nwaugha</title>
          <link rel="shortcut icon" href={`${prefix}/favicon.png`} />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument