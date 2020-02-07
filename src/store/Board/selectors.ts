import { createSelector } from 'reselect';
import { get } from 'lodash/fp';
import { StoreState } from 'models/storeStates/StoreState';
import { BoardState } from 'models/storeStates/BoardState';

const getBoardState = get<StoreState, 'boardState'>('boardState');

export const getBoard = createSelector(getBoardState, (boardState: BoardState) => get<BoardState, 'board'>('board')(boardState));
