import { FETCH_POST_LIST, FetchPostListAction } from './actionTypes';

export const fetchPostList: FetchPostListAction = () => (dispatch) => dispatch({
  type: FETCH_POST_LIST,
});
