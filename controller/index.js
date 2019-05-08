require(`dotenv`).config();

const express = require(`express`);
const router = express.Router();
const api_routes = require(`./api_routes`);
const keys = require(`../config/keys`);



router.get(`/form`, (req, res) => {
    res.send(`form`);

});

router.use(`/api`, api_routes);

module.exports = router;