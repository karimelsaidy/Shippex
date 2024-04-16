import {decode, encode} from 'js-base64';
import React, {useLayoutEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast, {ToastConfig} from 'react-native-toast-message';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

import {AnimatedBootSplash} from '@/assets';
import iconsConfig from '@/assets/fonts/selection.json';
import {toastConfig} from '@/config';
import {initI18n} from '@/i18n';
import {AppNavigation} from '@/navigation';
import {useStore} from '@/store';
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
  const [appReady, setAppReady] = useState(false);
  const storeLoaded = useStore(
    (state: {_hasHydrated: boolean}) => state._hasHydrated,
  );
  const [animationEnd, setAnimationEnd] = useState(false);

  useLayoutEffect(() => {
    initConfiguration().finally(async () => {
      setAppReady(true);
    });
  }, []);

  return (
    <SafeAreaProvider>
      {(!appReady || !storeLoaded || !animationEnd) && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setAnimationEnd(true);
          }}
        />
      )}
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
