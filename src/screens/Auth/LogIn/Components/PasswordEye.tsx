import React from 'react';

import {Icon} from '@/components';
import tw from '@/tw';

export const PasswordEye = (showPassword: boolean, callBack: () => void) => {
  return (
    <Icon
      name={showPassword ? 'eye' : 'eye-with-line'}
      type="entypo"
      size={22}
      containerStyle={tw`self-center mr-5`}
      onPress={callBack}
    />
  );
};
