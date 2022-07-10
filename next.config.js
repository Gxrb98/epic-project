// /** @type {import('next').NextConfig} */

// const { i18n } = require('./next-i18next.config')

// module.exports = {
//   i18n,
// }

// // const nextConfig = {
// //   reactStrictMode: true,
// // }

// // module.exports = nextConfig
const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL || 3000,
    MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://juan:juanjose25002566@cluster0.qe89v.mongodb.net/valeria?retryWrites=true&w=majority" || 'mongodb://localhost/valeria'
  },
  i18n,
}