export const COLORS = {
  primary: '#074EE8',
  gradient_start: '#e8dbfc',
  gradient_end: '#f8f9d2',
  textColor: '#767676',
  borderColor: '#AAAAAA',
  in_color: '#50C878',
  out_color: '#DC143C',
  alert_color: '#FA5F55',
};

export const IMAGES = {
  background: require('../assets/images/gradient.png'),
};

export const SIZES = {
  h1: 24,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
};

export const FONTS = {
  h1: {fontFamily: 'B612-Regular', fontSize: SIZES.h1},
  h2: {fontFamily: 'B612-Regular', fontSize: SIZES.h2},
  h3: {fontFamily: 'B612-Regular', fontSize: SIZES.h3},
  h4: {fontFamily: 'B612-Regular', fontSize: SIZES.h4},
  h4bold: {fontFamily: 'B612-Bold', fontSize: SIZES.h4},
  h5: {fontFamily: 'B612-Regular', fontSize: SIZES.h5},
};

const appTheme = {COLORS, SIZES, FONTS, IMAGES};

export default appTheme;
