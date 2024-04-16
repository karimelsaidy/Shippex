import {useNavigation} from '@react-navigation/native';

import {AuthNavigationPropsType} from './types';

export const Navigation = () => {
  const authNavigation = useNavigation<AuthNavigationPropsType>();

  return {
    authNavigation,
  };
};
