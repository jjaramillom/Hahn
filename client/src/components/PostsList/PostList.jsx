import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Post from './Post/Post';

const PostList = (props) => {
	const [posts, setPosts] = useState();

	useEffect(() => {
		const fetchPosts = async () => {
			const data = (await axios.get('http://localhost:3000/post')).data;
			if (data) setPosts(data);
		};

		fetchPosts();
	}, []);

	let postsArray = [];

	if (posts) {
		postsArray = posts.map((post) => (
			<Post key={post.id} title={post.title} body={post.body} userId= {post.userId} />
		));
	}

	return postsArray ? postsArray : <p>Loading</p>;
};

export default PostList;
