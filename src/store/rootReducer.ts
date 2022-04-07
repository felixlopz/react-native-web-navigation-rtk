import {combineReducers} from '@reduxjs/toolkit';
import {homeReducer, HomeState} from '../screens';

export interface RootState {
  homeScreen: HomeState;
}

export const rootReducer = combineReducers<RootState>({
  homeScreen: homeReducer,
});
