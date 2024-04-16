import {decode, encode} from 'js-base64';
import React, {useLayoutEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast, {ToastConfig} from 'react-native-toast-message';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

import iconsConfig from '@/assets/fonts/selection.json';
import {toastConfig} from '@/config';
import {initI18n} from '@/i18n';
import {AppNavigation} from '@/navigation';
import {disableFontScaling, registerCustomIconType} from '@/utils';

/**
 * the support of atob and btoa will come soon again
 * until that assign it globally
 */
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const initConfiguration = async () => {
  initI18n();
  disableFontScaling();
  registerCustomIconType('icomoon', createIconSetFromIcoMoon(iconsConfig));
};

const App = () => {
  useLayoutEffect(() => {
    initConfiguration().finally(async () => {
      // hide splash screen here or do what you want
    });
  }, []);

  return (
    <SafeAreaProvider>
      <AppNavigation />
      <Toast
        config={toastConfig as ToastConfig}
        visibilityTime={5000}
        topOffset={55}
      />
    </SafeAreaProvider>
  );
};

export default App;
