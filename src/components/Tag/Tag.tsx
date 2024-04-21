import React from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, Text, TextStyle, ViewStyle} from 'react-native';

import tw from '@/tw';

type Props = {
  type?: 'received' | 'error' | 'delivered' | 'canceled' | 'onHold';
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  label?: string;
  onPress?: () => void;
};

const labelText = {
  received: 'buttons.received',
  error: 'buttons.error',
  delivered: 'buttons.delivered',
  canceled: 'buttons.canceled',
  onHold: 'buttons.onHold',
};

const TagStyle = {
  received: tw`bg-azuWhite`,
  error: tw`bg-red3`,
  delivered: tw`bg-green2`,
  canceled: tw`bg-primary2`,
  onHold: tw`bg-yellow2`,
};

const TagTextStyle = {
  received: tw`text-secondary`,
  error: tw`text-red4`,
  delivered: tw`text-green`,
  canceled: tw`text-independence`,
  onHold: tw`text-yellow`,
};

export const Tag = ({
  type,
  containerStyle,
  textStyle,
  label,
  onPress,
}: Props) => {
  const {t} = useTranslation();
  return (
    <Pressable
      style={tw.style(
        `bg-primary2 px-1 py-1.5`,
        TagStyle[type],
        containerStyle,
      )}
      onPress={onPress}>
      <Text style={tw.style(`text-2.75 interMed`, TagTextStyle[type], textStyle)}>
        {label || t(labelText[type])}
      </Text>
    </Pressable>
  );
};
