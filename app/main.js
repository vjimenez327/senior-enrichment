'use strict';
import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Root from './components/Root';

render(
  <Provider store={store}>
  	<HashRouter>
		<Root />
	</HashRouter>
  </Provider>,
  document.getElementById('main')
);
