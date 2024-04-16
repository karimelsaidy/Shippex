import { getLocales } from 'react-native-localize';

export const getDeviceLanguage = (): string => {
  return getLocales()[0].languageCode;
};
