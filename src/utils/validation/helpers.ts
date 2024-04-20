/* eslint-disable sonarjs/no-duplicate-string */
import * as yup from 'yup';

import {urlHttpRegex} from '@/utils';

export const validationHelpers = {
  requiredFieldSchema: () => {
    return yup
      .string()
      .typeError('errorMessages.required')
      .required('errorMessages.required');
  },
  optionalFieldSchema: () => {
    return yup.mixed().notRequired();
  },
  requiredBooleanSchema: () => {
    return yup.boolean().required('errorMessages.required');
  },
  urlFieldSchema: () => {
    return yup
      .string()
      .typeError('errorMessages.required')
      .required('errorMessages.required')
      .test('url', 'errorMessages.wrongUrl', function (value) {
        return urlHttpRegex.test(value.trim());
      });
  },
};
