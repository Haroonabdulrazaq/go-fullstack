const http = require('http');
const app = require('./app')

app.set('port', process.env.PORT || 8080)
const server = http.createServer(app)

server.listen(process.env.PORT || 8080)