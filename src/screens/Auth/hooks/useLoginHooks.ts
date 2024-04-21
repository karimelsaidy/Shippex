import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import Toast from 'react-native-toast-message';

import {logInService, logInServiceType} from '@/services';
import {useStore} from '@/store';
import {appLang} from '@/utils';

const SERVER_ERROR_MESSAGE = 'errorMessages.serverError';

export const useLoginHooks = () => {
  const {setUserData} = useStore(state => state.userSlice);
  const [loading, setLoading] = useState(false);
  const {t} = useTranslation();

  const login = async (params: logInServiceType) => {
    setLoading(true);
    try {
      const response = await logInService(params);
      setLoading(false);
      if (response.status) {
        setUserData(response.user);
        return {status: true};
      } else {
        console.log();
        Toast.show({
          type: 'ErrorInfo',
          text1:
            response?.feedback?.message?.[appLang] || t(SERVER_ERROR_MESSAGE),
        });
        return {status: false};
      }
    } catch {
      setLoading(false);
      Toast.show({
        type: 'ErrorInfo',
        text1: t(SERVER_ERROR_MESSAGE),
      });
      return {status: false};
    }
  };

  return {
    login,
    loading,
  };
};
