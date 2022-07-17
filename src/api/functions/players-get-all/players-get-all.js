//const data = require('../../../data/heatohead.json')
const fetch = require('node-fetch');

const handler =  async () => {
    //get data from remote URL
    const response = await fetch('https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json')
    const data = await response.json()

    const {players} = data;
    players.sort(function (a, b) { // sort return data by ID ASC
        return a.id - b.id;
    });
    return players;
}

module.exports = handler;