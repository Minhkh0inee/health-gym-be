const express = require('express')
const app = require('./config/server/server')
const port = process.env.PORT || 3000

startHTTPServer()




function startHTTPServer() {
  const server = app.listen(port, () => {
    console.info(`Server is listen on port ${server.address().port} with mode ${process.env.ENV}`);
  })
}