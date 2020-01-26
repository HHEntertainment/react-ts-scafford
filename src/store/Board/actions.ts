import { FETCH_POST_LIST } from './actionTypes';

export const fetchPostList: Action = () => dispatch =>
  dispatch({
    type: FETCH_POST_LIST,
  });
