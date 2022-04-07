import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {Dispatch} from 'redux';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './rootReducer';
import {rootSaga} from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store: EnhancedStore = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger],
});
sagaMiddleware.run(rootSaga);

export const dispatch: Dispatch = store.dispatch;
