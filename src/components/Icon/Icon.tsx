import {mergeStyles} from '@fluentui-react-native/merge-props';
import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';

import tw from '@/tw';
import {getIconType} from '@/utils';

/** Local imports */
import {IconProps} from './types';

const Icon: React.FC<IconProps> = ({
  type = 'icomoon',
  name,
  size = 24,
  color: colorProp,
  iconStyle,
  iconProps,
  raised = false,
  containerStyle,
  disabled = false,
  disabledStyle,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  pressableProps,
  style = {},
}) => {
  const color = colorProp || tw.color('gray');
  const IconComponent = getIconType(type);

  const getBackgroundColor = React.useMemo(() => {
    return raised ? tw.color('primary') : 'transparent';
  }, [raised]);

  const buttonStyles = React.useMemo(
    () => ({
      borderRadius: size + 4,
      height: size * 2 + 4,
      width: size * 2 + 4,
    }),
    [size],
  );

  return (
    <View
      style={mergeStyles(
        styles.container,
        raised && styles.raised,
        iconStyle,
        iconStyle && iconStyle.borderRadius
          ? {
              borderRadius: iconStyle.borderRadius,
            }
          : {},
        containerStyle,
      )}
      testID="RNE__ICON__CONTAINER">
      <Pressable
        disabled={
          !((onPress || onLongPress || onPressIn || onPressOut) && !disabled)
        }
        {...{
          onPress,
          onLongPress,
          onPressIn,
          onPressOut,
          accessibilityRole: 'button',
          ...pressableProps,
        }}
        style={mergeStyles(style)}
        testID="RNE__ICON__CONTAINER_ACTION">
        <View
          style={mergeStyles(
            raised && buttonStyles,
            {
              backgroundColor: getBackgroundColor,
              alignItems: 'center',
              justifyContent: 'center',
            },
            disabled && styles.disabled,
            disabled && disabledStyle,
          )}
          testID="RNE__ICON">
          <IconComponent
            testID="RNE__ICON__Component"
            style={mergeStyles({backgroundColor: 'transparent'}, iconStyle)}
            size={size}
            name={name}
            color={color}
            {...iconProps}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  disabled: {
    backgroundColor: tw.color('gray'),
  },
  raised: {
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
});

Icon.displayName = 'Icon';

export default Icon;
