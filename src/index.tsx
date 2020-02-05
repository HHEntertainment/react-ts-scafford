import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './store/reducers';
import initializeStore from './store/initializeStore';
import sagas from './store/sagas';
import App from './views';

enum SupportedEnv {
  development = 'development',
  production = 'production',
}

const composeEnhancers = process.env.NODE_ENV === SupportedEnv.development ? composeWithDevTools : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware.apply(null, [sagaMiddleware]);
const store = createStore(reducers, {}, composeEnhancers(middleware));

sagaMiddleware.run(sagas);
initializeStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
