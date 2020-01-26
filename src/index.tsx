import * as React from 'react';
import * as ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './store/reducers';
import initializeStore from './store/initializeStore';
import { SupportedEnv } from './env';

import App from './components/App';
import { loadEnvVariables } from './env';

loadEnvVariables(process.env.NODE_ENV);
const composeEnhancers = process.env.NODE_ENV === SupportedEnv.DEVELOPMENT ? composeWithDevTools : compose;

const middleware = applyMiddleware.apply(null, [thunkMiddleware]);
const store = createStore(reducers, {}, composeEnhancers(middleware));

initializeStore(store);

ReactDOM.render(<App />, document.getElementById("root"));