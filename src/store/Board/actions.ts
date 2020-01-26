import { FETCH_POST_LIST } from './actionTypes';

export const fetchPostList = () => dispatch =>
  dispatch({
    type: FETCH_POST_LIST,
  });