import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { DEV, FB_TRACKING_ID, SITE_DESCRIPTION, SITE_IMAGE, SITE_NAME, SITE_TITLE } from '@constants/env'

export default class extends Document {
  static async getInitialProps(ctx) {
    const documentProps = await Document.getInitialProps(ctx)
    const { renderPage } = ctx
    const page = renderPage()

    return { ...documentProps, ...page }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />
          <meta name="Description" content={SITE_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={SITE_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={SITE_NAME} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image" content={SITE_IMAGE} />
          <meta name="format-detection" content="telephone=no, address=no, email=no" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/images/icon/icon-180.png"></link>
          <link rel="shortcut icon" href="/static/images/icon/favicon.ico" />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.prototype.findIndex,Object.entries"></script>
          {!DEV && FB_TRACKING_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window,document,'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '${FB_TRACKING_ID}');
fbq('track', 'PageView'); `
              }}
            />
          )}
          {!DEV && FB_TRACKING_ID && (
            <noscript>
              <img height="1" width="1" src={`//www.facebook.com/tr?id=${FB_TRACKING_ID}&ev=PageView&noscript=1`} />
            </noscript>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
