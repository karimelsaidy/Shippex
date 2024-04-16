/* eslint-disable sonarjs/no-duplicate-string */
import * as yup from 'yup';

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
};
