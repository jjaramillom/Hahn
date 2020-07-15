import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

import axios from '../../services/axios-server';

import classes from './CreatePost.module.css';

const ALERT_SHOW_DURATION = 3000; //ms

const CreatePost = (props) => {
	const [author, setAuthor] = useState('');
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [result, setResult] = useState(null);

	const clearForm = () => {
		setAuthor('');
		setBody('');
		setTitle('');
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		let response;
		try {
			response = await axios.post('/customPost', { post: { author, title, body } });
			props.onCreatedPost(response.data.data)
			setResult(response.data);
			setTimeout(() => setResult(null), ALERT_SHOW_DURATION);
			clearForm();
		} catch (error) {
			setResult({ error: error.toString() });
		}
	};
	var alert = null;

	if (result) {
		alert = (
			<Alert
				show={result !== null}
				variant={result.error ? 'danger' : 'success'}
				dismissible
				onClose={() => setResult(null)}>
				{result.error
					? `Could not save the post. ${result.error}`
					: 'Post was successfully saved'}
			</Alert>
		);
	}

	return (
		<React.Fragment>
			<Card className={classes.card}>
				<Card.Header as='h2'>
					<b>Create new post</b>
				</Card.Header>
				<Card.Body>
					<Form>
						<Form.Group>
							<Form.Label>Author</Form.Label>
							<Form.Control
								value={author}
								onChange={(event) => setAuthor(event.target.value)}
								type='text'
								placeholder="Enter author's name"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Title</Form.Label>
							<Form.Control
								value={title}
								onChange={(event) => setTitle(event.target.value)}
								type='text'
								placeholder="Enter post's title"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Post</Form.Label>
							<Form.Control
								value={body}
								onChange={(event) => setBody(event.target.value)}
								as='textarea'
								rows='3'
							/>
						</Form.Group>

						<Button onClick={submitHandler} variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</Card.Body>
			</Card>
			{alert}
		</React.Fragment>
	);
};

export default CreatePost;
