import { storage } from '@/storage';

import { getDeviceLanguage } from './getDeviceLanguage';

export const getPreferredLanguage = () => {
  const storedLanguage = storage.getString('language');

  return storedLanguage || getDeviceLanguage();
};
