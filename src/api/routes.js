const http = require('http');
const playersGetAll = require("./functions/players-get-all/players-get-all.js");

module.exports = http.createServer((req, res) => {
    let url = new URL(`http://${process.env.HOST}:${process.env.PORT}${req.url}`); // absolute URL
    res.setHeader('content-Type', 'Application/json'); //global setting in this sample app

    if (url.pathname == '/' && req.method === 'GET') { // GET / for base API url
        res.statusCode = 200;
        res.end(JSON.stringify({message: 'OK'}))
    }
    else if (url.pathname == '/players' && req.method === 'GET') { // GET /players for all players
        const response = playersGetAll()
        res.statusCode = 200;
        res.end(JSON.stringify({message:'success', data:response}))
    }
    else { // if the route is not found, send 404
        res.statusCode = 404;
        res.end(JSON.stringify({message: 'no such route'}))
    }

})