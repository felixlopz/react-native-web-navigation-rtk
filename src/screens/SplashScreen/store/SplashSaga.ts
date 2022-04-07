import * as NavigationService from '../../../services/NavigationService';
import {delay, put, takeLatest} from 'redux-saga/effects';
import {RootActionTypes} from '../../../store/rootActions';

function* checkInitialState() {
  yield delay(2000);
  NavigationService.setRoutes([{name: 'Home'}]);
}

export function* splashSagaWatcher() {
  yield takeLatest([RootActionTypes.InitApplication], checkInitialState);
}
