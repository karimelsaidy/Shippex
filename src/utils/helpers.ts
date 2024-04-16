import {isDate} from 'lodash';

export const isValidDate = (obj: any) => {
  return isDate(obj) && obj.toString() !== 'Invalid Date';
};
