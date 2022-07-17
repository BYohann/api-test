const http = require('http');

module.exports = http.createServer((req, res) => {
    let url = new URL(`http://${process.env.HOST}:${process.env.PORT}${req.url}`); // absolute URL
    res.setHeader('content-Type', 'Application/json'); //global setting in this sample app

    if (url.pathname == '/' && req.method === 'GET') { // base API url
        res.statusCode = 200;
        res.end(JSON.stringify({message: 'OK'}))
    }
})