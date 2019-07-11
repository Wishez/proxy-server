require("@babel/register")
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const utils = require('./utils')
const cookies = require('./api/routes/cookies')

const app = express()

app.use(morgan())
app.use(cors())
app.use(express.static(utils.resolve('../node_modules')))

app.use('/api', cookies)

app.use((req, res) => {
  res.append('set')
  res.sendFile(utils.resolve('templates/index.html'))
})

const PORT = process.env.config.PORT || 3070
app.listen(PORT, () => {
  console.log(`Server listen on ${PORT} port!🐼`)
})

app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});