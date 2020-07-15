import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import classes from './DeletablePost.module.css';

const DeletablePost = (props) => (
	<Card className={classes.card}>
		<Card.Header as='h5'>
			<b>{props.title} &nbsp;</b>
			<Button
				variant='danger'
				onClick={() => props.onDelete(props.postId)}
				className={classes.farRight}>
				delete
			</Button>
		</Card.Header>
		<Card.Body>
			<Card.Subtitle className='mb-2 text-muted'></Card.Subtitle>
			<Card.Text>{props.body}</Card.Text>
		</Card.Body>
		<Card.Footer className='text-muted'>
			<b>
				Created by: <i>User {props.user}</i>
				&nbsp;on {props.timestamps ? props.timestamps.createdAt : randomDate()}
			</b>
		</Card.Footer>
	</Card>
);

const randomDate = () => {
	const start = new Date(2019, 0, 1);
	const end = new Date(2019, 11, 30);
	return new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	).toGMTString();
};

export default DeletablePost;
