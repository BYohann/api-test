const playerGetAll = require('./players-get-all')

test('players get all', async () => {
    const response = await playerGetAll();
    expect(response.length).toBe(5);
});