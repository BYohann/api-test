const playerGetById = require('./players-get-by-id')

test('players get by id', async () => {
    const response = await playerGetById({playerId:52});
    expect(response.id).toBe(52);
});