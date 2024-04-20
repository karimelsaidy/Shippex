import type {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Routes} from '@/navigation';

export type AuthStackParamListType = {
  [Routes.WELCOME_SCREEN]: undefined;
  [Routes.LOGIN]: undefined;
  [Routes.HOME_TABS]: undefined;
};

export type AuthNavigationPropsType =
  NativeStackNavigationProp<AuthStackParamListType>;
export type AuthNavigationRouteProp = RouteProp<AuthStackParamListType>;
