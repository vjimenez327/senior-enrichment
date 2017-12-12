'use strict';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Root from './components/Root';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';

render(
  <Provider store={store}>
  	<Router>
		<Root />
	</Router>
  </Provider>,
  document.getElementById('main')
);
