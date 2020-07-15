import React from 'react';

import Container from 'react-bootstrap/Container';

import CustomPosts from './containers//CustomPosts/CustomPosts';
import DefaultPosts from './containers//DefaultPosts/DefaultPosts';

// import Tabs from './components/UI/Navigation/Navigation';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';

function App() {
	return (
		<Container>
			<Tabs defaultActiveKey='custom'>
				<Tab eventKey='custom' title='Custom posts'>
					<CustomPosts />
				</Tab>
				<Tab eventKey='default' title='Default posts'>
					<DefaultPosts />
				</Tab>
			</Tabs>
		</Container>
	);
}

export default App;
