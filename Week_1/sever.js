const http = require('http');

const port = 2405;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    if (req.url === '/') {
        res.end('Web page TH');
    } else if (req.url === '/name') {
        res.end('Web name');s
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log('Server is running');
});
