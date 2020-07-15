const mongoose = require('mongoose');

const postSchema = {
	author: 'string',
	title: 'string',
	body: 'string',
	timestamps: { createdAt: { type: 'Date', default: Date.now }, updatedAt: 'Date' },
};

const Post = mongoose.model('post', postSchema, 'Posts');

module.exports = Post;
