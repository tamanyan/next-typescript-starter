// import '../styles/index.sass'

import App from 'next/app'
// import Head from 'next/head'
// import { Provider } from 'react-redux'
import { appWithTranslation } from '@server/i18n'
import React from 'react'
// import { Store } from 'redux'
// import { WithTranslation } from 'next-i18next'
// import { appWithTranslation } from '@App/server/i18n'
// import createStore from '../store'
// import i18next from 'i18next'
// import withRedux from 'next-redux-wrapper'

// interface MyAppProps extends WithTranslation {
//   store: Store
//   query?: { [key: string]: string }
// }

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default appWithTranslation(MyApp)
