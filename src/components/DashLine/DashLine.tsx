import React from 'react';
import {Dimensions} from 'react-native';
import Svg, {G, Rect} from 'react-native-svg';

import tw from '@/tw';

type Props = {
  fillColor?: string;
  dashWidth?: number;
  dashHeight?: number;
  dashSPace?: number;
};

export const DashLine = ({
  fillColor = tw.color('primary') as string,
  dashWidth = 10,
  dashHeight = 2,
  dashSPace = 16,
}: Props) => {
  const {width} = Dimensions.get('screen');
  const spacing = dashSPace;

  const dashes = Array.from({length: Math.round(width / spacing)}).fill(null);
  return (
    <Svg height="11" width="100%">
      <G>
        {dashes.map((_, index) => (
          <Rect
            key={index}
            width={dashWidth}
            height={dashHeight}
            fill={fillColor}
            translateX={spacing * index}
          />
        ))}
      </G>
    </Svg>
  );
};
