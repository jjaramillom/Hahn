import React, { useState, useEffect } from 'react';

import axios from '../../services/axios-server';
import PostList from '../../components/PostsList/PostList';
import Spinner from '../../components/UI/Spinner/Spinner';

function App() {
	const [postArr, setPostArr] = useState([]);
	const [error, setError] = useState();

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				var res = (await axios.get('/post')).data;
			} catch (error) {
				return setError(error.toString());
			}
			if (res) {
				setPostArr(res);
			}
		};
		fetchPosts();
	}, []);

	if (postArr.length > 0) return <PostList posts={postArr} />;

	if (error) return <h2>{error}</h2>;

	return <Spinner />;
}

export default App;
