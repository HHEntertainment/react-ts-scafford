import { SagaIterator } from 'redux-saga';
import {
  all,
  // put,
  // call,
  // takeLatest,
} from 'redux-saga/effects';
// import { request, SupportedHttpMethodType, isResponseStatusOk } from 'store/api';

export default function* sagas(): SagaIterator {
  yield all([
    // mapping actionType and generator function
  ]);
}
