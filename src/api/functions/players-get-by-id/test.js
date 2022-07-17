const playerGetById = require('./players-get-by-id')

test('players get by id', () => {
    const response = playerGetById({playerId:52});
    expect(response.id).toBe(52);
});