import i18next from 'i18next';
import { I18nManager } from 'react-native';

import { storage } from '@/storage';

export const setLanguage = (language: string) => {
  const isRTL = i18next.dir(language) === 'rtl';
  I18nManager.forceRTL(isRTL);
  I18nManager.allowRTL(isRTL);
  storage.set('language', language);
};
