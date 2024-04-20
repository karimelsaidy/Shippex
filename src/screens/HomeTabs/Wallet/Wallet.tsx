import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';

import tw from '@/tw';

export const Wallet = () => {
  const {t} = useTranslation();
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`h2-bold`}>{t('routes.wallet')}</Text>
    </View>
  );
};
