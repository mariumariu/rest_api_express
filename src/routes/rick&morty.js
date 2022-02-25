const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('https://rickandmortyapi.com/api');
    const rickmorty = await response.json();
    res.json(rickmorty);
});

module.exports = router;