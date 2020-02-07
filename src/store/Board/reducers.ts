import { set, get } from 'lodash/fp';
import { BoardState } from 'models/storeStates/BoardState';
import { Board } from 'models/Board';
import {
  FETCH_BOARD,
  FETCH_BOARD_SUCCESS,
  FETCH_BOARD_FAILED,
} from './actionTypes';

export default {
  [FETCH_BOARD]: (state: BoardState) => {
    const board: Board = get<BoardState, 'board'>('board')(state);
    const updatedBoard = set('isRequested', true)(board);

    return set('board', updatedBoard)(state);
  },
  [FETCH_BOARD_SUCCESS]: (state: BoardState, board: Board) => {
    const newBoard = {
      ...board,
      isRequested: false,
    };

    return set('board', newBoard)(state);
  },
  [FETCH_BOARD_FAILED]: (state: BoardState) => {
    const board: Board = get<BoardState, 'board'>('board')(state);
    const updatedBoard = set('isRequested', false)(board);

    return set('board', updatedBoard)(state);
  },
};
