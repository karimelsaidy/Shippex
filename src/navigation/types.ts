import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';

import {Routes} from '@/navigation';

export type RootStackParamList = {
  [Routes.WELCOME_SCREEN]: undefined;
  [Routes.LOGIN]: undefined;
  [Routes.HOME_TABS]: NavigatorScreenParams<HomeParamsListTabs>;
};

export type HomeParamsListTabs = {
  [Routes.HOME]: undefined;
  [Routes.SCAN]: undefined;
  [Routes.WALLET]: undefined;
  [Routes.PROFILE]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeParamsListTabs> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeParamsListTabs, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
