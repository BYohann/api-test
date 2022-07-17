const http = require('http');
const playersGetAll = require("./functions/players-get-all/players-get-all.js");
const playersGetById = require('./functions/players-get-by-id/players-get-by-id.js')

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
    else if (/^\/players\/(\d+)/.test(url.pathname) && req.method === 'GET') { // GET /players/{ID} for individual player
        const id = url.pathname.split('/').pop();
        const params = {playerId: id};
        const response = playersGetById(params);
        // if player does not exist in source data, provide 404
        if (!response) {
            res.statusCode = 404;
            res.setHeader('content-Type', 'Application/json');
            res.end(JSON.stringify({message:'player not found'}))
        } else {
            res.statusCode = 200;
            res.end(JSON.stringify({message:'success', data:response}))
        }
    }
    else { // if the route is not found, send 404
        res.statusCode = 404;
        res.end(JSON.stringify({message: 'no such route'}))
    }

})