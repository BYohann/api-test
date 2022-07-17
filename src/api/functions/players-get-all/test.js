const playerGetAll = require('./players-get-all')

test('players get all', () => {
    const response = playerGetAll();
    expect(response.length).toBe(5);
});