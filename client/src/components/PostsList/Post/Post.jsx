import React from 'react';

import Card from 'react-bootstrap/Card';

const Post = (props) => (
	<Card>
		<Card.Body>
			<Card.Title>
				<h1>{props.title}</h1>
			</Card.Title>
			<i>by: User {props.userId}</i>
			<Card.Subtitle className='mb-2 text-muted'></Card.Subtitle>
			<Card.Text>
				{props.body}
			</Card.Text>
		</Card.Body>
	</Card>
);

export default Post;
