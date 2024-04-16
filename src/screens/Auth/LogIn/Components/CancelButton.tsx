import React from 'react';
import {useTranslation} from 'react-i18next';
import {I18nManager, Pressable, Text} from 'react-native';

import {Icon} from '@/components';
import {Navigation} from '@/navigation';
import tw from '@/tw';

export const CancelButton = () => {
  const {t} = useTranslation();
  const {authNavigation} = Navigation();
  /**
   * we can built a custom pressable button here according to
   * os ux to feel a native experience
   * */
  return (
    <Pressable
      style={tw`flex-row items-center`}
      onPress={() => authNavigation.pop()}>
      <Icon
        name={I18nManager.isRTL ? 'right' : 'left'}
        type="ant-design"
        color={tw.color('secondary2')}
        size={22}
      />
      <Text style={tw`text-secondary2 mx-1 sfProRegular`}>
        {t('buttons.cancel')}
      </Text>
    </Pressable>
  );
};
