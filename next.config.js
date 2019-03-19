// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }
    return config;
  }
});