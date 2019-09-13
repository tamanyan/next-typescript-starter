import * as React from 'react'
import { Header } from './Header'
import Head from 'next/head'

export const Layout: React.FunctionComponent = props =>
  <div id="layout">
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Header/>
    <main>
      {props.children}
    </main>
  </div>
