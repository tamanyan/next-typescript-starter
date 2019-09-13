const NextI18Next = require('next-i18next').default
const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['th'],
})

// export default NextI18NextInstance

// export const { appWithTranslation, withTranslation } = NextI18NextInstance

module.exports = {
  default: NextI18NextInstance,
  appWithTranslation: NextI18NextInstance.appWithTranslation,
  withTranslation: NextI18NextInstance.withTranslation
}
