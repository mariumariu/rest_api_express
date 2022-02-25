const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    const locations = await response.json();
    res.json(locations);
});

module.exports = router;