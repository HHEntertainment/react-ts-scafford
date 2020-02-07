export const FETCH_POST_LIST = 'FETCH_POST_LIST';
export const FETCH_POST_LIST_SUCCESS = 'FETCH_POST_LIST_SUCCESS';
export const FETCH_POST_LIST_FAILED = 'FETCH_POST_LIST_FAILED';

export type FetchPostListAction = {
  (param?: any): (dispatch: any) => any;
}
