import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
/**
 * local imports
 */

const SCREEN_SPACING = 12;
const CONTENT_WIDTH = width - SCREEN_SPACING * 2;

export const MODAL_HEIGHT = height - 48;

export const SECONDARY_HEADER_HEIGHT = 248;

export const BUTTON_SIZE = {
  FULL: {width: CONTENT_WIDTH, height: 48},
};

export const PRODUCT_TILE = {
  HEIGHT: 192,
  GUTTER: 4,
};

export const widthStyles = {
  'w-content': `w-[${CONTENT_WIDTH}px]`,
};

export const heightStyles = {
  'h-header-lg': `h-[${SECONDARY_HEADER_HEIGHT}px]`,
};

export const generalStyles = {
  title: 'text-black text-5  text-left',
  subTitle: ' text-gray  text-4.5 text-left',
};
export const typography = {
  'h1-reg': ` text-6 text-black text-left`,
  'h1-bold': ` text-6 text-black text-left`,
  'h2-reg': ` text-5 text-black text-left `,
  'h2-bold': ` text-5 text-black text-left`,
  'h3-reg': ` text-4.5 text-black text-left`,
  'h3-bold': ` text-4.5 text-black  text-left `,
  'h4-reg': ` text-4 text-black text-left`,
  'h4-bold': ` text-4 text-black text-left`,
  'pa-reg': ` text-3.5 text-black text-left`,
  'pa-bold': ` text-3.5 text-black text-left`,
  interReg: 'font-interRegular',
  interMed: 'font-interMedium',
  interSemiBold: 'font-interSemiBold',
  interBold: 'font-interBold',
  sfProRegular: 'font-sfProRegular',
  sfProMedium: 'font-sfProMedium',
  sfProSemibold: 'font-sfProSemibold',
  sfProBold: 'font-sfProBold',
};

export {CONTENT_WIDTH};
