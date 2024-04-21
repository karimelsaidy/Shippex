import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';

import {Icons} from '@/assets';
import {ActionButton} from '@/src/components';
import tw from '@/tw';
import {wp} from '@/utils';

const ScanIcon = () => (
  <Image source={Icons.scan} style={tw`w-5 h-5 mr-3`} resizeMode="contain" />
);
export const Scan = () => {
  const {t} = useTranslation();
  return (
    <View>
      <ActionButton
        label={t('buttons.addScan')}
        onPress={() => {}}
        RenderRight={ScanIcon}
        btnStyle={tw`bg-secondary w-${wp(44)} items-center justify-center`}
        textStyle={tw`interReg text-4  text-primary`}
      />
    </View>
  );
};
