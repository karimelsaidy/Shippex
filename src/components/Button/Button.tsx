import React, {FC} from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
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
  loadingIndicatorColor = tw.color('gray'),
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
    tertiary: disabled ? tw`` : tw`bg-azuWhite`,
  };

  const preDifinedTextStyle = {
    primary: tw`text-secondary`,
    secondary: tw`text-primary`,
    tertiary: disabled ? tw`text-gray4` : tw`text-secondary`,
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
          <ActivityIndicator size="small" color={loadingIndicatorColor} />
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
