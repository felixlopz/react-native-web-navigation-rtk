import {createAction} from '@reduxjs/toolkit';

export enum BasicActionTypes {
  InitApplication = 'InitApplication',
}

export const RootActionTypes = {
  ...BasicActionTypes,
};

export const initApplication = createAction<void>(
  RootActionTypes.InitApplication,
);
