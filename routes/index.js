var express = require('express');
var router = express.Router();

const axios = require('axios').default;

const keys = require('../config/keys');

/* GET home page. */
router.get('/post', async (req, res, next) => {
	const data = await axios.get(`${keys.apiURL}/posts`);
	res.send(data.data);
});

router.get('/post/:id', async (req, res, next) => {
	const data = await axios.get(`${keys.apiURL}/posts/${req.params.id}`);
	res.send(data.data);
});

module.exports = router;
