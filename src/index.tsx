import * as React from 'react';
import * as ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './store/reducers';
import initializeStore from './store/initializeStore';
import { loadEnvVariables, SupportedEnv } from './env';
import App from './components';

loadEnvVariables(process.env.NODE_ENV);
const composeEnhancers = process.env.NODE_ENV === SupportedEnv.DEVELOPMENT ? composeWithDevTools : compose;

const middleware = applyMiddleware.apply(null, [thunkMiddleware]);
const store = createStore(reducers, {}, composeEnhancers(middleware));

initializeStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
