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
    BASE_URL: process.env.BASE_URL,
  },
  i18n,
}