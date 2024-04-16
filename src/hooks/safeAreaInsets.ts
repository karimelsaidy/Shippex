import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const InsetsHook = () => {
  const insets = useSafeAreaInsets();

  return {
    top: insets.top / 4,
    left: insets.left / 4,
    right: insets.right / 4,
    bottom: insets.bottom / 4,
  };
};
