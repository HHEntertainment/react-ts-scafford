import { connect } from 'react-redux';

import { fetchBoard } from 'store/Board/actions';
import { getBoard } from 'store/Board/selectors';
import { StoreState } from 'models/storeStates/StoreState';
import Board from './Board';

export default connect(
  (state: StoreState) => ({
    /* selector */
    board: getBoard(state),
  }),
  {
    /* actions */
    fetchBoard,
  }
)(Board);
