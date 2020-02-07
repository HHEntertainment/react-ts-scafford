import { Dispatch } from 'redux';
import { FETCH_POST_LIST, FetchPostListAction } from './actionTypes';

export const fetchPostList: FetchPostListAction = () => (dispatch: Dispatch) => dispatch({
  type: FETCH_POST_LIST,
});
