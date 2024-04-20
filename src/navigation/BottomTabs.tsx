import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';

import {Icon, IconType} from '@/components';
import {Home, Profile, Scan, Wallet} from '@/screens';

import tw from '../utils/tw';
import {Routes} from './routes';
import {HomeParamsListTabs} from './types';

const Tab = createBottomTabNavigator<HomeParamsListTabs>();

const TabBarIcon = (name: string, color: string, type?: IconType) => (
  <Icon name={name} type={type} color={color} size={22} />
);

const TabBarLabel = (label: string, focused: boolean) => (
  <Text
    style={tw`sfProRegular text-2.75  ${
      focused ? 'text-secondary5' : 'text-gray2'
    }`}>
    {label}
  </Text>
);

export const BottomTabs = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tw.color('secondary'),
        tabBarInactiveTintColor: tw.color('gray2'),
      }}>
      <Tab.Screen
        name={Routes.HOME}
        component={Home}
        options={{
          tabBarLabel: ({focused}) => TabBarLabel(t('routes.home'), focused),
          tabBarIcon: ({focused, color}) =>
            TabBarIcon(focused ? 'activeShippment' : 'shippment', color),
        }}
      />
      <Tab.Screen
        name={Routes.SCAN}
        component={Scan}
        options={{
          tabBarLabel: ({focused}) => TabBarLabel(t('routes.scan'), focused),
          tabBarIcon: ({color}) => TabBarIcon('scan', color),
        }}
      />
      <Tab.Screen
        name={Routes.WALLET}
        component={Wallet}
        options={{
          tabBarLabel: ({focused}) => TabBarLabel(t('routes.wallet'), focused),
          tabBarIcon: ({color}) => TabBarIcon('wallet', color),
        }}
      />

      <Tab.Screen
        name={Routes.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: ({focused}) => TabBarLabel(t('routes.profile'), focused),
          tabBarIcon: ({color, focused}) =>
            TabBarIcon(focused ? 'activeAvatar' : 'avatar', color),
        }}
      />
    </Tab.Navigator>
  );
};
