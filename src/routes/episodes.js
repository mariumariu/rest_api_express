const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const episodes = await response.json();
    res.json(episodes);
});

module.exports = router;