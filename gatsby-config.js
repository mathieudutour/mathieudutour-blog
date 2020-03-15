const config = require('./config')
const path = require('path')

module.exports = {
  siteMetadata: config,
  plugins: [
    {
      resolve: `gatsby-theme-medium-to-own-blog`,
      options: {
        config,
      },
    },
  ],
}
