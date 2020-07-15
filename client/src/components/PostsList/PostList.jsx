import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import Post from './Post/Post';
import DeletablePost from './DeletablePost/DeletablePost';

import classes from './PostList.module.css';

const PostList = (props) => {
	let postsArray = [];
	const PostComponent = props.deletable ? DeletablePost : Post;

	if (props.posts.length > 0) {
		postsArray = props.posts.map((post) => {
			return (
				<PostComponent
					onDelete={(post) => props.onDeletePost(post)}
					key={post.id}
					postId={post.id}
					title={post.title}
					body={post.body}
					user={post.userId}
				/>
			);
		});
	}

	return <Container className={classes.container}>{postsArray}</Container>;
};

export default PostList;
