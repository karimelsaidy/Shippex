import React, {FC} from 'react';
import {Pressable, Text, TextStyle, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';

import tw from '@/tw';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  textStyle?: TextStyle;
  btnStyle?: ViewStyle;
  RenderRight?: React.FC;
  RenderLeft?: React.FC;
};

export const ActionButton: FC<Props> = ({
  label,
  onPress,
  disabled,
  textStyle,
  btnStyle = {},
  RenderRight,
  RenderLeft,
}: Props) => {
  const AnimatedButton = Animated.createAnimatedComponent(Pressable);
  return (
    <AnimatedButton
      style={[
        tw.style(`flex-row items-center py-meduim1 rounded-easy`),
        btnStyle,
      ]}
      onPress={() => onPress()}
      disabled={disabled}>
      {!!RenderRight && <RenderRight />}
      <Text style={tw.style(`interReg  text-4 text-primary`, textStyle)}>
        {label}
      </Text>
      {!!RenderLeft && <RenderLeft />}
    </AnimatedButton>
  );
};
