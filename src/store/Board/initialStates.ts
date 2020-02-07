import { BoardState } from 'models/storeStates/BoardState';

const initialState: BoardState = {
  board: {
    id: null,
    title: null,
    posts: null,
    isRequested: false,
  },
};

export default initialState;
