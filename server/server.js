const http = require('http')
const app = require('./app')
const port = 3090;
const server = http.createServer(app)
server.listen(port)
 
