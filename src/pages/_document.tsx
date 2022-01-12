import React from 'react'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@mui/styles'
import { ServerStyleSheet } from 'styled-components'

const __webpack_nonce__ = process.env.nonce || ''

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentsSheet = new ServerStyleSheet()
    const materialSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => {
          return materialSheets.collect(styledComponentsSheet.collectStyles(<App { ...props } />))
        },
      })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            <style
              id="jss-server-side"
              nonce={process.env.nonce}
              dangerouslySetInnerHTML={{ __html: materialSheets.toString() }}
            />
            {styledComponentsSheet.getStyleElement()}
          </React.Fragment>
        ),
      }
    } finally {
      styledComponentsSheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en-AU">
        <Head nonce={process.env.nonce}>
          <script nonce={process.env.nonce} dangerouslySetInnerHTML={{ __html: `window.__webpack_nonce__ = '${process.env.nonce}'` }} />
          <meta property="csp-nonce" content={process.env.nonce} />
          <link rel="preload" href="/fonts/ApexRounded-Book.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/ApexRounded-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" crossOrigin="use-credentials" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#d83b00" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="Credit Union SA" />
          <meta name="application-name" content="Credit Union SA" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#f2f2f2" />

        </Head>
        <body>
          <Main />
          <NextScript nonce={process.env.nonce} />
        </body>
      </Html>
    )
  }
}
