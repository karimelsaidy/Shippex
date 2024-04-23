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

  const wholeImageAnimation = useAnimatedStyle(() => ({
    transform: [{scale: scaleUpAnimation.value}],
  }));

  const imageTopAnimationStyle = useAnimatedStyle(() => ({
    transform: [{translateY: -translateAnimation.value}],
    width: interpolate(
      translateAnimation.value,
      [0, ScreenHeight * 0.1],
      [36.11, ScreenWidth],
    ),
    height: interpolate(translateAnimation.value, [0, ScreenHeight], [12, 144]),
  }));

  const imageBottomAnimationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY:
          translateAnimation.value === 0
            ? -translateAnimation.value
            : -translateAnimation.value - 5,
      },
    ],
    width: interpolate(
      translateAnimation.value,
      [0, ScreenHeight * 0.1],
      [35.61, ScreenWidth],
    ),
    height: interpolate(
      translateAnimation.value,
      [0, ScreenHeight],
      [22.79, 144],
    ),
  }));

  const {container, logo} = BootSplash.useHideAnimation({
    manifest: animations.bootSplash,
    logo: Icons.bootsplash_logo,
    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      scaleUpAnimation.value = withTiming(4, {duration: 700}, () => {
        translateAnimation.value = withTiming(
          ScreenHeight * 0.1,
          {
            duration: 300,
          },
          () => {
            colorAnimation.value = withTiming(
              1,
              {
                duration: 300,
              },
              () => {
                'worklet';

                runOnJS(onAnimationEnd)();
              },
            );
          },
        );
      });
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
      <Animated.View style={[tw`h-9 justify-between`, wholeImageAnimation]}>
        <Animated.Image
          source={Icons.topSplashLogo}
          style={[tw`w-9.0275 h-3`, imageTopAnimationStyle]}
          onLayout={container.onLayout}
          resizeMode="stretch"
          onLoadEnd={logo.onLoadEnd}
        />
        <Animated.Image
          source={Icons.bottomSplashLogo}
          style={[tw`w-9.1525 h-5.6975`, imageBottomAnimationStyle]}
          onLayout={container.onLayout}
          resizeMode="stretch"
          onLoadEnd={logo.onLoadEnd}
        />
      </Animated.View>
    </Animated.View>
  );
};
