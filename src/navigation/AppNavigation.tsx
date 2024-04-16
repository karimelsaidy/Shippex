import 'moment/locale/ar';

import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import moment from 'moment';
import React from 'react';

import {Routes} from '@/navigation';
import {WelcomeScreen} from '@/screens';
import tw from '@/tw';

import {appLang} from '../utils';
import {AuthStackParamListType} from '.';

const customThem = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: tw.color('primary') as string,
  },
};

export const AppNavigation = () => {
  moment.locale(appLang);

  const Stack = createNativeStackNavigator<AuthStackParamListType>();
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer theme={customThem} ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Routes.WELCOME_SCREEN}>
        <Stack.Screen name={Routes.WELCOME_SCREEN} component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
