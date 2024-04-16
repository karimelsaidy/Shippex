import i18n from 'i18next';
import {Dimensions, I18nManager, Platform} from 'react-native';
import {getLocales} from 'react-native-localize';

const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

const Lang = getLocales()[0].languageCode;
const isAR = Lang === 'ar' || i18n.language === 'ar';
const appLang: 'en' | 'ar' = (i18n.resolvedLanguage || 'en') as 'ar' | 'en';

const isRtl = I18nManager.isRTL;

const wp = (percentage: number) => {
  return (ScreenWidth * (percentage / 100)) / 4;
};

const hp = (percentage: number) => {
  return (ScreenHeight * (percentage / 100)) / 4;
};

export {
  appLang,
  hp,
  isAndroid,
  isAR,
  isIOS,
  isRtl,
  Lang,
  ScreenHeight,
  ScreenWidth,
  wp,
};
