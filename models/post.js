const mongoose = require('mongoose');

const postSchema = {
	userId: number,
	id: number,
	title: 'string',
	body: 'string',
};

const Post = mongoose.model('post', postSchema);

module.exports = Post;
