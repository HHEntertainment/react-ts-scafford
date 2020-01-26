import { FETCH_POST_LIST } from './actionTypes';
import { Action } from '../index';

export const fetchPostList: Action = () => dispatch =>
  dispatch({
    type: FETCH_POST_LIST,
  });
