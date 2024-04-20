import React from 'react';
import {ViewStyle} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {Icon} from '@/components';
import tw from '@/tw';

type Props = {
  value: boolean | undefined;
  onChange: (arg0: boolean) => void;
  iconStyle?: ViewStyle;
  innerIconStyle?: ViewStyle;
  fillColor?: string;
  unFillColor?: string;
  CheckIcon?: React.FC;
  disableBuiltInState?: boolean;
  disabled?: boolean;
};

export const CheckBox = ({
  value,
  onChange,
  CheckIcon,
  iconStyle,
  innerIconStyle,
  fillColor = tw.color('gray3'),
  unFillColor = tw.color('primary'),
  disableBuiltInState,
  disabled,
}: Props) => {
  const checkIcon = () =>
    CheckIcon ? (
      <CheckIcon />
    ) : (
      <Icon
        name="check"
        type="entypo"
        size={15}
        color={tw.color('secondary4')}
      />
    );

  return (
    <BouncyCheckbox
      size={25}
      isChecked={value}
      fillColor={fillColor}
      unfillColor={unFillColor}
      iconStyle={tw.style(`bg-azuWhite mt-1 `, iconStyle)}
      innerIconStyle={tw.style(
        `bg-primary border-2  ${
          value ? 'border-secondary4 bg-azuWhite' : 'border-gray3'
        } rounded-2`,
        innerIconStyle,
      )}
      ImageComponent={checkIcon}
      onPress={(isChecked: boolean) => {
        !disabled && onChange(isChecked);
      }}
      disableBuiltInState={disableBuiltInState}
    />
  );
};
