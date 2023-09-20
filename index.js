var http = require('http');
var dataAtual = new Date();
var dataFormatada = dataAtual.toDateString();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Caike Henry Firmino Felipe!\nData atual: ' + dataFormatada);
}).listen(8025);


