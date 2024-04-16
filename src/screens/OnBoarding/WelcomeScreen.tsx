import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';

import {Icon} from '@/src/components';
import tw from '@/tw';

export const WelcomeScreen = () => {
  const {t} = useTranslation();

  return (
    <View style={tw`flex-1  justify-center items-center `}>
      <View style={tw`w-[90%] items-center `}>
        <Icon name="activeWallet" color={tw.color('secondary')} />
        <Text style={tw`interBold`}>{t('holder.holder')}</Text>
      </View>
    </View>
  );
};
