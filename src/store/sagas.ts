import { all, fork } from 'redux-saga/effects';
import boardSagas from './Board/sagas';

export default function* root() {
  yield all([
    fork(boardSagas),
  ]);
}
