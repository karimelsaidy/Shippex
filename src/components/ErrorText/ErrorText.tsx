import React from 'react';
import {Text, TextStyle, ViewStyle} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

import {Icon} from '@/components';
import tw from '@/tw';

type Props = {
  errorMsg: string;
  containerStyle?: ViewStyle;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  errorTextStyle?: TextStyle;
};

export const ErrorText = ({
  errorMsg,
  containerStyle,
  iconName = 'info-circle-1',
  iconColor = tw.color('red'),
  iconSize = 24,
  errorTextStyle,
}: Props) => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={tw.style(
        `bg-red2 px-[2%] items-center flex-row py-1 my-1 rounded-1.5`,
        containerStyle,
      )}>
      <Icon size={iconSize} name={iconName} color={iconColor} />
      <Text
        style={[tw`text-left pa-reg text-4 px-[3%] flex-1`, errorTextStyle]}>
        {errorMsg}
      </Text>
    </Animated.View>
  );
};
