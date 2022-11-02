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
const path = require("path");
module.exports = {
  reactStrictMode: true,
  i18n,

}