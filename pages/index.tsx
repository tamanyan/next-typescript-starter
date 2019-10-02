import * as React from 'react'
import { Layout } from '@components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter, SingletonRouter } from 'next/router'
import { WithTranslation } from 'next-i18next'
import { withTranslation } from '@server/i18n'

interface IState {}

interface IStateProps {
  router: SingletonRouter
}

class Index extends React.Component<IStateProps & WithTranslation, IState> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common']
    }
  }

  render() {
    const { t } = this.props

    return (
      <Layout>
        <Head>
          <title>My page title</title>
        </Head>
        <div>Home</div>
        <Link href="/listing" prefetch={false}>
          <a>{t('title')}</a>
        </Link>
      </Layout>
    )
  }
}

export default withTranslation('common')(withRouter(Index))
