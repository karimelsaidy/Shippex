import {useNavigation} from '@react-navigation/native';

import {
  HomeParamsListTabs,
  HomeTabScreenProps,
  RootStackParamList,
  RootStackScreenProps,
} from './types';

export const Navigation = () => {
  const authNavigation =
    useNavigation<
      RootStackScreenProps<keyof RootStackParamList>['navigation']
    >();
  const homeNavigation =
    useNavigation<HomeTabScreenProps<keyof HomeParamsListTabs>['navigation']>();

  return {
    authNavigation,
    homeNavigation,
  };
};
