import React from 'react';
import {ViewStyle} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

import tw from '@/tw';

type Props = {
  containerStyle?: ViewStyle;
  color?: string;
};

export const LoadingComp = ({
  containerStyle,
  color = tw.color('secondary'),
}: Props) => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={tw.style(
        `absolute h-full w-full items-center justify-center`,
        containerStyle,
      )}>
      <SkypeIndicator color={color} />
    </Animated.View>
  );
};
