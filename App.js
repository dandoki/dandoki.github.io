import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { createApp } from '@phenomic/preset-react-app/lib/client';

import HomeContainer from './containers/HomeContainer';
import BlogPostContainer from './containers/BlogPostContainer';
import PageError from './components/PageError';

import './styles/app.css';

const routes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={HomeContainer} />
		<Route path="/after/:after" component={HomeContainer} />
		<Route path="/blog/*" component={BlogPostContainer} />
		<Route path="*" component={PageError} />
	</Router>
);

export default createApp(routes);

if (module.hot) {
	module.hot.accept(() => renderApp(routes));
}