import React from 'react';
import BootSplash from 'react-native-bootsplash';
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {animations, Icons} from '@/assets';
import tw from '@/tw';
import {ScreenHeight, ScreenWidth} from '@/utils';

type Props = {
  onAnimationEnd: () => void;
};

export const AnimatedBootSplash = ({onAnimationEnd}: Props) => {
  const scaleUpAnimation = useSharedValue(1);
  const translateAnimation = useSharedValue(0);
  const colorAnimation = useSharedValue(0);

  const containerAnimationStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        colorAnimation.value,
        [0, 0.4, 1],
        ['#ffffff', '#4169e1', '#2F50C1'],
      ),
    };
  });

  const imageAnimationStyle = useAnimatedStyle(() => ({
    transform: [
      {scale: scaleUpAnimation.value},
      {translateY: -translateAnimation.value},
    ],
    width: interpolate(
      translateAnimation.value,
      [0, -ScreenHeight * 0.1],
      [ScreenWidth * 20, 200],
    ),
  }));

  const {container, logo} = BootSplash.useHideAnimation({
    manifest: animations.bootSplash,
    logo: Icons.bootsplash_logo,
    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      scaleUpAnimation.value = withTiming(3.6, {duration: 1000});
      translateAnimation.value = withTiming(ScreenHeight * 0.1, {
        duration: 1000,
      });
      colorAnimation.value = withTiming(
        1,
        {
          duration: 1000,
        },
        () => {
          'worklet';

          runOnJS(onAnimationEnd)();
        },
      );
    },
  });

  return (
    <Animated.View
      {...container}
      style={[
        containerAnimationStyle,
        tw`flex-1 absolute z-10`,
        container.style,
      ]}>
      <Animated.Image {...logo} style={[logo.style, imageAnimationStyle]} />
    </Animated.View>
  );
};
