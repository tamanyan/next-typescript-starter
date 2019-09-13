import * as React from 'react'
import { Layout } from '@components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter, SingletonRouter } from 'next/router'

interface IState {}

interface IStateProps {
  router: SingletonRouter
}

class Index extends React.Component<IStateProps, IState> {
  componentDidMount() {
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>My page title</title>
        </Head>
        <div>Home</div>
        <Link href="/listing">
          <a>Listings</a>
        </Link>
      </Layout>
    )
  }
}

export default withRouter(Index)
