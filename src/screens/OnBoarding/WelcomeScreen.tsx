import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';

import {Images} from '@/assets';
import {Button} from '@/components';
import {Navigation, Routes} from '@/navigation';
import tw from '@/tw';
import {wp} from '@/utils';

export const WelcomeScreen = () => {
  const {t} = useTranslation();
  const {authNavigation} = Navigation();
  return (
    <View style={tw`flex-1 bg-secondary pb-[15%]`}>
      <View style={tw`flex-1 justify-center items-center `}>
        <Image
          style={tw`w-${wp(55)} h-[25%]`}
          resizeMode="contain"
          source={Images.logo2}
        />
      </View>
      <Button
        label={t('buttons.login')}
        onPress={() => {
          authNavigation.navigate(Routes.LOGIN);
        }}
        btnStyle={tw`mx-[5.5%]`}
      />
    </View>
  );
};
