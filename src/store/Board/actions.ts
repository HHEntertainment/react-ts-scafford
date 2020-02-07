import { Dispatch } from 'redux';
import { FETCH_BOARD, FetchBoardAction } from './actionTypes';

export const fetchBoard: FetchBoardAction = () => (dispatch: Dispatch) => dispatch({
  type: FETCH_BOARD,
});
