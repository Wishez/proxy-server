const path = require('path')
const os = require('os')

const resolve = (pathname) => path.join(process.cwd(), `src/${pathname}`)

module.exports = { resolve }