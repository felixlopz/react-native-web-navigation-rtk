import {
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {RootState} from '../../../store';

export interface HomeState {
  text: string;
}

export enum HomeActionType {
  HomeSetText = 'main/setText',
}

const initialState: HomeState = {
  text: 'Welcome',
};

const homeSlice = createSlice({
  initialState: initialState,
  name: 'homeSlice',
  reducers: {
    setText: (state: HomeState, action: PayloadAction<string>) => ({
      ...state,
      text: action.payload,
    }),
  },
});

export const homeReducer = homeSlice.reducer;
export const {setText} = homeSlice.actions;

export const selectHomeState = (state: RootState) => state.homeScreen;

export const selectHomeText = createSelector(
  selectHomeState,
  (state: HomeState) => state.text,
);
