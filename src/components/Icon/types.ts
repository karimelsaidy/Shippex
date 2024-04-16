import React from 'react';
import {PressableProps, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {
  IconButtonProps,
  IconProps as VectorIconProps,
} from 'react-native-vector-icons/Icon';

export type IconType =
  | 'icomoon'
  | 'zocial'
  | 'octicon'
  | 'material'
  | 'material-community'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | 'font-awesome'
  | 'simple-line-icon'
  | 'feather'
  | 'fontisto'
  | 'ant-design';

export type IconObject = {
  /** Name of icon. */
  name?: string;

  /** Color of icon. */
  color?: string;

  /** Size of icon. */
  size?: number;

  /** Type of icon */
  type?: IconType;

  /** Apply style to the icon using iconStyle. */
  iconStyle?: StyleProp<TextStyle>;
};

export type IconNode =
  | boolean
  | React.ReactElement<object>
  | Partial<IconProps>;

type Inline<T, K extends keyof T> = Partial<
  {
    pressableProps: Omit<T, K>;
  } & Pick<T, K>
>;

export type InlinePressableProps = Inline<
  PressableProps,
  'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut'
>;

export type IconProps = IconButtonProps & {
  /** Type of icon set. [Supported sets here](#available-icon-sets). */
  type?: IconType;

  /** Update React Native Component. */
  Component?: typeof React.Component;

  /** Adds box shadow to button. */
  raised?: boolean;

  /** Add styling to container holding icon. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Provide all props from react-native Icon component. */
  iconProps?: VectorIconProps;

  /** Disables onPress events. Only works when `onPress` has a handler. */
  disabled?: boolean;

  /** Style for the button when disabled. Only works when `onPress` has a handler. */
  disabledStyle?: StyleProp<ViewStyle>;
} & InlinePressableProps;
