var express = require('express');
var router = express.Router();

const axios = require('axios').default;

const keys = require('../config/keys');

const Post = require('../models/post');

router.get('/post', async (req, res, next) => {
	const data = await axios.get(`${keys.apiURL}/posts`);
	res.send(data.data);
});

router.get('/post/:id', async (req, res, next) => {
	const data = await axios.get(`${keys.apiURL}/posts/${req.params.id}`);
	res.send(data.data);
});

router.post('/customPost/', async (req, res, next) => {
	console.log(req.body);
	new Post(req.body.post).save((error, post) => {
		if (error) {
			res.status(400).send({ state: 'error', error });
		} else {
			res.send({ state: 'success', data: { post } });
		}
	});
});

router.get('/customPost', async (req, res, next) => {
	let posts = await Post.find({});

	res.status(200).send(posts);
});

router.delete('/customPost/:id', async (req, res, next) => {
	try {
		await Post.deleteOne({ _id: req.params.id });
		res.status(200).send({ state: 'success', data: { id: req.params.id } });
	} catch (error) {
		res.status(400).send({ state: 'error', error });
	}
});

router.get('/customPost/:id', async (req, res, next) => {
	const post = await Post.find({ _id: req.params.id });
	res.send(post);
});

module.exports = router;
