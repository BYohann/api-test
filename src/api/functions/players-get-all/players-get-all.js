const data = require('../../../data/heatohead.json')

const handler =  () => {
    const {players} = data;
    players.sort(function (a, b) {
        return a.id - b.id;
    });
    return players;
}

module.exports = handler;