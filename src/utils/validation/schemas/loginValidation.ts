import * as yup from 'yup';

import {validationHelpers} from '../helpers';

export const loginValidation = () => {
  return yup.object().shape({
    url: validationHelpers.urlFieldSchema(),
    userName: validationHelpers.requiredFieldSchema(),
    password: validationHelpers.requiredFieldSchema(),
  });
};
