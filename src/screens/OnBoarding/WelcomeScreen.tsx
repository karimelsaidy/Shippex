import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';

import {Images} from '@/assets';
import tw from '@/tw';
import {hp, wp} from '@/utils';

export const WelcomeScreen = () => {
  const {t} = useTranslation();

  return (
    <View style={tw`flex-1 bg-secondary `}>
      <View style={tw`flex-1 justify-center items-center `}>
        <Image
          style={tw`w-${wp(60)} h-[25%]`}
          resizeMode="contain"
          source={Images.logo2}
        />
      </View>
      {/* <Button /> */}
    </View>
  );
};
