import {all, fork} from 'redux-saga/effects';
import {splashSagaWatcher} from '../screens';

export function* rootSaga() {
  yield all([fork(splashSagaWatcher)]);
}
