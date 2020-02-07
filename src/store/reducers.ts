import { combineReducers } from 'redux';
import { has } from 'lodash/fp';

import boardReducers from './Board/reducers';
import boardInitialState from './Board/initialStates';

/* eslint-disable */
const createReducer = (reducers = {}, initialState = {}) => (state = initialState, { type, ...action }) => (has(type)(reducers) ? reducers[type](state, action) : state);

const reducers = combineReducers({
  Board: createReducer(boardReducers, boardInitialState),
});

export default reducers;
