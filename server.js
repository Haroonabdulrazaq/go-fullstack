const http = require('http');

const server = http.createServer((req,res)=>{
  res.end('This is server response')
})

server.listen(process.env.PORT || 5500)