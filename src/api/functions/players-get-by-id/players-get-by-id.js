const data = require('../../../data/heatohead.json')

const handler = (params) => {
    const {playerId} = params;
    const {players} = data;
    const player = players.find(p => p.id == playerId);
    return player;
}

module.exports = handler;