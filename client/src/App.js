import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Notes from './components/notes';
import CreateNote from './components/createNote';
import UpdateNote from './components/updateNote';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<h1>My Notes</h1>

					<Route exact path="/" component={Notes}></Route>
					<Route path="/createnote" component={CreateNote} ></Route>
					<Route path="/updatenote/:id" component={UpdateNote} ></Route>
					<Route path="/deletenote/:id" component={() => (<div>deleteamesta</div>)}></Route>
				</Fragment>
			</Router>
		);
	}
}
