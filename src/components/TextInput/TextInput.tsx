import React, {useState} from 'react';
import {
  TextInput as TextInputComponent,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {ZoomIn, ZoomOut} from 'react-native-reanimated';

import {ErrorText} from '@/components';
import tw from '@/tw';
import {isRtl} from '@/utils';

interface Props extends TextInputProps {
  RenderRight?: React.FC;
  RenderLeft?: React.FC;
  label?: string;
  customLabelStyle?: TextStyle;
  error?: boolean;
  errorMsg?: string | undefined | false;
  placeHolderStyle?: TextStyle;
  containerStyle?: ViewStyle;
  textInputStyle?: TextStyle;
  errorTextStyle?: TextStyle;
  focusedStyle?: ViewStyle;
  unFocusedStyle?: ViewStyle;
}

export const TextInput: React.FC<Props> = ({
  RenderRight,
  RenderLeft,
  containerStyle,
  textInputStyle,
  label,
  customLabelStyle,
  error,
  errorMsg,
  placeholder,
  placeHolderStyle,
  children,
  errorTextStyle,
  focusedStyle,
  unFocusedStyle,
  ...props
}: Props) => {
  const [focused, setFocused] = useState(false);
  return (
    <View>
      <View
        style={tw.style(
          `mb-1 bg-primary2 border border-primary2 rounded-3 text-black h-15 items-center  `,
          focused ? ` border-secondary4  ${focusedStyle}` : `${unFocusedStyle}`,

          !!error && ` border-red`,
          containerStyle,
        )}>
        <View style={tw`self-start justify-end`}>
          {!!label && focused && (
            <Animated.Text
              style={tw.style(
                ` text-left interReg text-2.75 px-5 pt-1 text-gray`,
                customLabelStyle,
              )}
              entering={ZoomIn}
              exiting={ZoomOut}>
              {label}
            </Animated.Text>
          )}
        </View>

        <View style={tw.style(`flex-row justify-center flex-grow`)}>
          {!!RenderRight && <RenderRight />}
          <TextInputComponent
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholderTextColor={tw.color('gray2')}
            style={[
                tw` flex-1 overflow-hidden  interReg text-secondary4  self-center px-5 mb-.5 h-full ${
                isRtl ? 'text-right' : 'text-left'
              } `,
              props.value
                ? tw``
                : tw.style(`text-4 interReg`, placeHolderStyle),
              textInputStyle,
            ]}
            {...(!focused && {placeholder})}
            {...props}>
            {children}
          </TextInputComponent>
          {!!RenderLeft && <RenderLeft />}
        </View>
      </View>
      {!!errorMsg && (
        <ErrorText
          containerStyle={tw`mt-2`}
          errorMsg={errorMsg}
          errorTextStyle={errorTextStyle}
        />
      )}
    </View>
  );
};
