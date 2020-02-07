import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import boardSagas from './Board/sagas';

export default function* root(): SagaIterator {
  yield all([
    fork(boardSagas),
  ]);
}
