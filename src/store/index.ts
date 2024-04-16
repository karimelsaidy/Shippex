import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

import {createGeneralDataSlice, generalDataSliceType} from './generalDataSlice';

export const useStore = create(
  immer<generalDataSliceType>((...a) => ({
    ...createGeneralDataSlice(...a),
  })),
);
