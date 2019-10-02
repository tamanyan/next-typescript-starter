const express = require('express')
const next = require('next')
const { join } = require('path')
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const nextI18NextMiddleware = require('next-i18next/middleware').default
const nextI18next = require('./i18n').default
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(nextI18NextMiddleware(nextI18next))

  server.get('*', (req, res) => {
    // handle GET request to /service-worker.js
    if (req.path === '/service-worker.js') {
      const filePath = join(__dirname, '../.next', req.path)
      app.serveStatic(req, res, filePath)
    } else {
      return handle(req, res)
    }
  })

  server.listen(port || '3000', (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
