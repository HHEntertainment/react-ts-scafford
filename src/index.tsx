import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore, applyMiddleware, compose, Store,
} from 'redux';
import { composeWithDevTools, EnhancerOptions } from 'redux-devtools-extension';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import reducers from './store/reducers';
import initializeStore from './store/initializeStore';
import sagas from './store/sagas';
import App from './views/App';

enum SupportedEnv {
  development = 'development',
  production = 'production',
}

const composeEnhancers = process.env.NODE_ENV === SupportedEnv.development ? composeWithDevTools : compose;

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
const middleware: EnhancerOptions = applyMiddleware.apply(null, [sagaMiddleware]);
const store: Store = createStore(reducers, {}, composeEnhancers(middleware));

sagaMiddleware.run(sagas);
initializeStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
