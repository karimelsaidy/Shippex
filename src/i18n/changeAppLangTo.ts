import {changeLanguage} from 'i18next';
import RNRestart from 'react-native-restart';

import {setLanguage} from './setLanguage';

export const changeAppLangTo = async (language: 'ar' | 'en') => {
  await changeLanguage(language);
  await setLanguage(language);
  setTimeout(() => RNRestart.restart(), 300);
};
