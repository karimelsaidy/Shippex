/* eslint-disable no-param-reassign */
import {merge} from 'lodash';
import EncryptedStorage from 'react-native-encrypted-storage';
import {StateCreator} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

type generalDataType = {
  firstTime?: boolean;
};

const initialGeneralData = {
  firstTime: true,
};

export type generalDataSliceType = {
  _hasHydrated: boolean;
  generalDataSlice: {
    generalData: generalDataType;
    setGeneralUserData: (arg0: generalDataType) => void;
    reset: () => void;
    setHasHydrated: (arg0: boolean) => void;
  };
  setShowNotificationIndicator?: () => void;
};

export const createGeneralDataSlice: StateCreator<generalDataSliceType> =
  persist(
    (set, get) => ({
      _hasHydrated: false,
      generalDataSlice: {
        generalData: {
          firstTime: true,
          isUserSaved: false,
        },
        setGeneralUserData: (arg0: object) =>
          set(state => {
            state.generalDataSlice.generalData = {
              ...state.generalDataSlice.generalData,
              ...arg0,
            };
          }),
        setHasHydrated: conditon => {
          set(state => {
            state._hasHydrated = conditon;
          });
        },
        reset: () =>
          set(state => {
            state.generalDataSlice.generalData = initialGeneralData;
          }),
      },
    }),
    {
      name: 'general-data',
      storage: createJSONStorage(() => EncryptedStorage),
      onRehydrateStorage: state => {
        const generalState = state;
        // optional
        return (state, error) => {
          if (error) {
            generalState?.generalDataSlice.setHasHydrated(true);
          } else {
            state?.generalDataSlice.setHasHydrated(true);
          }
        };
      },
      partialize: state => ({generalDataSlice: state.generalDataSlice}),
      merge: (persistedState, currentState) =>
        merge(currentState, persistedState),
    },
  );
