import * as React from 'react'
import { Layout } from '@components/Layout'
import Head from 'next/head'
import { WithTranslation } from 'next-i18next'
import { withTranslation } from '@server/i18n'
import { withRouter, SingletonRouter } from 'next/router'

interface IStateProps {
  router: SingletonRouter
}

interface IState {}

class ListingPage extends React.Component<IStateProps & WithTranslation, IState> {
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
          <title>Listing</title>
        </Head>
        <div>{t('login')}</div>
      </Layout>
    )
  }
}

export default withTranslation('common')(withRouter(ListingPage))
