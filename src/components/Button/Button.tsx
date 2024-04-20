import React, {FC} from 'react';
import {Pressable, Text, TextStyle, ViewStyle} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import Animated from 'react-native-reanimated';

import tw from '@/tw';

type Props = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  outLineTextStyle?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  loading?: boolean;
  loadingIndicatorColor?: string;
  textStyle?: TextStyle;
  btnStyle?: ViewStyle;
  children?: JSX.Element;
  LoadingComponent?: JSX.ElementType;
};

export const Button: FC<Props> = ({
  label,
  onPress,
  variant = 'primary',
  outLineTextStyle = 'primary',
  loading,
  loadingIndicatorColor,
  disabled,
  textStyle,
  btnStyle = {},
  LoadingComponent,
  children,
}: Props) => {
  const preDifinedBtnStyle = {
    primary: disabled ? ' bg-red3 opacity-40' : tw`bg-primary `,
    secondary: disabled
      ? ' bg-primary opacity-20 border border-gray'
      : tw`bg-secondary  border border-gray`,
    tertiary: disabled ? tw`opacity-40` : tw`bg-azuWhite`,
  };

  const preDifinedTextStyle = {
    primary: tw`text-secondary`,
    secondary: tw`text-primary`,
    tertiary: disabled ? tw`text-gray4` : tw`text-secondary`,
  };

  const indicatorColor = {
    primary: disabled ? tw.color('gray4') : tw.color('secondary'),
    secondary: disabled ? tw.color('gray4') : tw.color('primary'),
    tertiary: disabled ? tw.color('gray4') : tw.color('secondary'),
  };

  const AnimatedButton = Animated.createAnimatedComponent(Pressable);
  return (
    <AnimatedButton
      style={[
        tw.style(
          `items-center py-meduim1 rounded-easy`,
          preDifinedBtnStyle[variant],
        ),
        btnStyle,
      ]}
      onPress={() => onPress()}
      disabled={disabled}>
      {loading &&
        (LoadingComponent ? (
          <LoadingComponent />
        ) : (
          <MaterialIndicator
            size={20}
            color={loadingIndicatorColor || indicatorColor[outLineTextStyle]}
          />
        ))}
      {children}

      {!loading && !!label && (
        <Text
          style={tw.style(
            `sfProBold  text-4.25 text-center`,
            preDifinedTextStyle[outLineTextStyle],
            textStyle,
          )}>
          {label}
        </Text>
      )}
    </AnimatedButton>
  );
};
