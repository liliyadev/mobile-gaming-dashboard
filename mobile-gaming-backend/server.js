// Assuming games is an array of game objects
app.get('/metrics', (req, res) => {
  if (!Array.isArray(games)) {
    return res.status(500).json({ error: 'Game data not available' });
  }

  res.json({
    totalGames: games.length,
    genres: [...new Set(games.map(g => g.genre))],
    lastUpdated: new Date().toISOString()
  });
});
