import * as yup from 'yup';

import {validationHelpers} from '../helpers';

export const login = () => {
  return yup.object().shape({
    email: validationHelpers.requiredFieldSchema(),
  });
};
