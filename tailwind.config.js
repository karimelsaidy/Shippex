/* eslint-disable import/no-import-module-exports */
import {Dimensions} from 'react-native';

import borderWidths from './tokens/borderWidths';
import Colors from './tokens/colors';
import fontSizes from './tokens/fontSizes';
import radii from './tokens/radii';
import spacing from './tokens/spacing';

const {plugin} = require('twrnc');

const styleUtils = require('./src/utils/style');

// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      ...Colors,
    },
    fontFamily: {
      interRegular: 'Inter Regular',
      interMedium: 'Inter Medium',
      interSemiBold: 'Inter SemiBold',
      interBold: 'Inter Bold',
      sfProRegular: 'SF Pro Text Regular',
      sfProMedium: 'SF Pro Text Medium',
      sfProSemibold: 'SF Pro Text Semibold',
      sfProBold: 'SF Pro Text Bold',
    },
    screens: {
      sm: '380px',
      md: '420px',
      lg: '680px',
      // or maybe name them after devices for `tablet:flex-row`
      tablet: '1024px',
    },
    extend: {
      spacing: {
        ...spacing,
        fullW: Dimensions.get('screen').width,
        fullH: Dimensions.get('screen').height,
      },
      fontSize: fontSizes,
      borderRadius: radii,
      borderWidth: borderWidths,
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        ...styleUtils.widthStyles,
        ...styleUtils.heightStyles,
        ...styleUtils.borderStyles,
        ...styleUtils.generalStyles,
        ...styleUtils.typography,
      });
    }),
  ],
};
