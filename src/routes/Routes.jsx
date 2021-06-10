import React from 'react';

import ListView from '../views/ListView';
import AddView from '../views/AddView';

import { Switch,  Route } from 'react-router-dom';

export default function Routes() {
	return (
		<Switch>
			<Route path="/add" component={AddView} />
			<Route exact path="/" component={ListView} />
		</Switch>
	
	)
}