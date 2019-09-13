const withPlugins = require('next-compose-plugins')
const nextBuildId = require('next-build-id')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')
// const nextRuntimeDotenv = require('next-runtime-dotenv')
const withSize = require('next-size')

// const withConfig = nextRuntimeDotenv({
//   public: ['API_URL', 'API_KEY']
// })

module.exports = withPlugins([[withCSS], [withSass], [withSize], [withOffline]], {
  generateBuildId: async () => nextBuildId({ dir: __dirname }),
  webpack(config) {
    // Further custom configuration here
    // console.log(config)
    return config
  }
})
