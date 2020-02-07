import { Dispatch } from 'redux';
import { ActionType } from '@redux-saga/types';

export const FETCH_BOARD: ActionType = 'FETCH_BOARD';
export const FETCH_BOARD_SUCCESS: ActionType = 'FETCH_BOARD_SUCCESS';
export const FETCH_BOARD_FAILED: ActionType = 'FETCH_BOARD_FAILED';

export type FetchBoardAction = {
  (): (dispatch: Dispatch) => void;
}
