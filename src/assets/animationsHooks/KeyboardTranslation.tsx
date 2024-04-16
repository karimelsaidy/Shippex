import {useAnimatedKeyboard, useAnimatedStyle} from 'react-native-reanimated';

type Props = {
  keyboardFactor?: number;
};

export const KeyboardTranslation = ({keyboardFactor = 4}: Props) => {
  const keyboard = useAnimatedKeyboard();
  const translateStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: -keyboard.height.value / keyboardFactor}],
    };
  });
  return {
    translateStyle,
  };
};
