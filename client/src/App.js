import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Notes from './components/notes';
import UpdateNote from './components/updateNote';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<h1>My Notes</h1>

					<Route exact path="/" component={Notes}></Route>

					<Route path="/createnote" component={UpdateNote} ></Route>
					<Route path="/updatenote/:id" component={UpdateNote} ></Route>
					{/* <Route path="signup" component={Signup} ></Route>
					<Route path="feature" component={RequireAuth(Feature)} ></Route> */}
				</Fragment>
			</Router>
		);
	}
}
