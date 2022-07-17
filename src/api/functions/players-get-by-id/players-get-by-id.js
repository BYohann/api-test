//const data = require('../../../data/heatohead.json')
const fetch = require('node-fetch');

const handler = async (params) => {
    //get data from remote URL
    const response = await fetch('https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json')
    const data = await response.json()

    const {playerId} = params;
    const {players} = data;
    const player = players.find(p => p.id == playerId); // return player objet or undefined
    return player;
}

module.exports = handler;