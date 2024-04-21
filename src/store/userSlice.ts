/* eslint-disable no-param-reassign */
import {StateCreator} from 'zustand';

type userdDataType = any;

export type userSliceDataType = {
  userSlice: {
    userData: userdDataType;
    setUserData: (data: userdDataType) => void;
    reset: () => void;
  };
};
const initialState = {};

export const createUserSlice: StateCreator<userSliceDataType> = set => ({
  userSlice: {
    userData: {},
    setUserData: (data: userdDataType) =>
      set(state => {
        state.userSlice.userData = {
          ...state.userSlice.userData,
          ...data,
        };
      }),
    reset: () =>
      set(state => {
        state.userSlice.userData = initialState;
      }),
  },
});
