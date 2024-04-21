import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

import {createGeneralDataSlice, generalDataSliceType} from './generalDataSlice';
import {createUserSlice, userSliceDataType} from './userSlice';

export const useStore = create(
  immer<generalDataSliceType & userSliceDataType>((...a) => ({
    ...createGeneralDataSlice(...a),
    ...createUserSlice(...a),
  })),
);
