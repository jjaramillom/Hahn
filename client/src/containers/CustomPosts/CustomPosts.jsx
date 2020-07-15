import React, { useState, useEffect } from 'react';
import axios from '../../services/axios-server';
import PostList from '../../components/PostsList/PostList';
import CreatePost from '../../components/CreatePost/CreatePost';
import Spinner from '../../components/UI/Spinner/Spinner';

function App() {
	const [postArr, setPostArr] = useState([]);
	const [error, setError] = useState();
	const [noPosts, setNoPosts] = useState(false);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				var res = (await axios.get('/customPost')).data;
			} catch (error) {
				return setError(error.toString());
			}
			if (res.length > 0) {
				res = res.map((post) => {
					post.id = post._id;
					delete post._id;
					return post;
				});
				setPostArr(res);
			} else {
				setNoPosts(true);
			}
		};
		fetchPosts();
	}, []);

	const onDeletePostHandler = async (postId) => {
		let res;
		try {
			res = (await axios.delete(`/customPost/${postId}`)).data;
		} catch (error) {
			return window.alert('ERROR. Post was not deleted');
		}
		console.log(res);

		const updatedPosts = postArr.filter((post) => post.id !== res.data.id);
		setPostArr(updatedPosts);
	};

	const onCreatePostHandler = (data) => {
		console.log(data);
		if (data.post) {
			setPostArr([data.post, ...postArr]);
		}
	};

	let postsComponent = noPosts ? <h2>No posts in server</h2> : <Spinner />;

	if (error) postsComponent = <h2>{error}</h2>;

	if (postArr.length > 0) {
		postsComponent = <PostList deletable onDeletePost={onDeletePostHandler} posts={postArr} />;
	}

	return (
		<React.Fragment>
			<CreatePost onCreatedPost={onCreatePostHandler} />
			{postsComponent}
		</React.Fragment>
	);
}

export default App;
