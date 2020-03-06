import { blurple, blue, green, yellow, red } from './rimble-colors'
import {
  brandColors,
  gradientColors,
  accentColors,
  primaryColors,
  successColors,
  warningColors,
  errorColors,
  baseColors,
} from './codefi-colors'

// colors
const colors = {
  // need to remove all of these?
  // Refactor these out and update reference to new color values.
  text: baseColors.base900,
  background: brandColors.white,
  primary: primaryColors.primary700,
  'primary-light': primaryColors.primary500,
  'primary-dark': primaryColors.primary900,
  blue: brandColors.blue,
  black: baseColors.base900,
  'near-black': baseColors.base800,
  'dark-gray': baseColors.base700,
  'mid-gray': baseColors.base600,
  // maybe we don't need 'grey' here
  grey: baseColors.base500,
  silver: baseColors.base400,
  'light-silver': baseColors.base300,
  'moon-gray': baseColors.base200,
  'light-gray': baseColors.base100,
  'near-white': baseColors.base000,
  white: '#fff',
  transparent: 'transparent',
  // blacks: [ // remove
  //   'rgba(0,0,0,.0125)',
  //   'rgba(0,0,0,.025)',
  //   'rgba(0,0,0,.05)',
  //   'rgba(0,0,0,.1)',
  //   'rgba(0,0,0,.2)',
  //   'rgba(0,0,0,.3)',
  //   'rgba(0,0,0,.4)',
  //   'rgba(0,0,0,.5)',
  //   'rgba(0,0,0,.6)',
  //   'rgba(0,0,0,.7)',
  //   'rgba(0,0,0,.8)',
  //   'rgba(0,0,0,.9)',
  // ],
  // whites: [ // remove
  //   'rgba(255,255,255,.0125)',
  //   'rgba(255,255,255,.025)',
  //   'rgba(255,255,255,.05)',
  //   'rgba(255,255,255,.1)',
  //   'rgba(255,255,255,.2)',
  //   'rgba(255,255,255,.3)',
  //   'rgba(255,255,255,.4)',
  //   'rgba(255,255,255,.5)',
  //   'rgba(255,255,255,.6)',
  //   'rgba(255,255,255,.7)',
  //   'rgba(255,255,255,.8)',
  //   'rgba(255,255,255,.9)',
  // ],
  success: successColors.success500,
  warning: warningColors.warning500,
  danger: errorColors.error500,
  info: primaryColors.primary400, // remove? we don't have this in figma
  // These are from figma and we use these
  ...brandColors,
  ...gradientColors,
  ...accentColors,
  ...primaryColors,
  ...successColors,
  ...warningColors,
  ...errorColors,
  ...baseColors,
}

// theme.js
const theme = {
  colors,
  // SPACE is too long for index - can we alias these values to something more memorable?
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512], // added 12, 20, 24, 40 (to base 2 values)
  // does it make sense to use direct values?
  // When would we use a space index?
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: [0, 400, 500, 600],
  letterSpacings: [0, 1, 2, 4, 8],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  fonts: {
    // serif: 'Inter, "Helvetica Neue", Arial, sans-serif', // remove
    sansSerif: 'Inter, "Helvetica Neue", Arial, sans-serif',
    mono: 'Monaco, Consolas, "Lucida Console", monospace',
  },
  radii: ['0', '4px', '8px', '16px', '32px'], // only need 4px
  borders: [0, '1px solid transparent'],
  borderWidths: ['0', '1px', '2px', '4px'],
  breakpoints: ['40em', '52em', '64em'],
  shadows: [
    // from figma
    '0',
    '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '0px 4px 8px rgba(0, 0, 0, 0.1)',
    '0px 6px 12px rgba(0, 0, 0, 0.1)',
    '0px 8px 16px rgba(0, 0, 0, 0.1)',
    '0px 10px 20px rgba(0, 0, 0, 0.1)',
    '0px 12px 24px rgba(0, 0, 0, 0.1)',
  ],
  opacity: {
    disabled: 0.4,
  },
  zIndices: [0, 9, 99, 999, 9999],
  messageStyle: {
    base: {
      color: colors['mid-gray'],
      backgroundColor: colors['near-white'],
      borderColor: colors['light-silver'],
    },
    success: {
      color: green.dark[1],
      backgroundColor: green.light[1],
      borderColor: green.base,
    },
    warning: {
      color: yellow.dark[1],
      backgroundColor: yellow.light[1],
      borderColor: yellow.base,
    },
    danger: {
      color: red.dark[1],
      backgroundColor: red.light[1],
      borderColor: red.base,
    },
    info: {
      color: blue.dark[1],
      backgroundColor: blue.light[1],
      borderColor: blue.base,
    },
  },
}

// ALIASES - use theme indexes as much as possible when defining aliases
// Use aliases as much as possible
theme.fontWeights.body = theme.fontWeights[1]
theme.fontWeights.heading = theme.fontWeights[2]
theme.fontWeights.bold = theme.fontWeights[3]

theme.fontSizes.small = theme.fontSizes[2]
theme.fontSizes.default = theme.fontSizes[3]
theme.fontSizes.large = theme.fontSizes[4]

theme.buttons = {
  primary: {
    // fontWeight: theme.fontWeights.bold,
    // color: baseColors.white, // are these not used anymore?
    // backgroundColor: primaryColors.primary700, // are these not used anymore?
    // use css custom props
    '--main-color': theme.colors.primary700, // I don't really love the way we need to type the same name, colors, and name again when using color values. Is there a shorter way?
    // It is nice to be able to shortcut to "primary800" when using the color as a prop value via SS - but here the names feel repetitive
    // Kick the can down the road on color name grouping?
    '--contrast-color': brandColors.white,
    '--hover-color': primaryColors.primary800, // added explicit definitions for all these state values.
    '--active-color': primaryColors.primary900,
    '--disabled-color': primaryColors.primary400,
    '--outline-hover-color': primaryColors.primary200,
    '--outline-active-color': primaryColors.primary300,
  },
  base: {
    // use css custom props
    '--main-color': baseColors.base700,
    '--contrast-color': brandColors.white,
    '--hover-color': baseColors.base800,
    '--active-color': baseColors.base900,
    '--disabled-color': baseColors.base400,
    '--outline-hover-color': baseColors.base200,
    '--outline-active-color': baseColors.base300,
  },
  success: {
    '--main-color': successColors.success700,
    '--contrast-color': brandColors.white,
    '--hover-color': successColors.success800,
    '--active-color': successColors.success900,
    '--disabled-color': successColors.success400,
    '--outline-hover-color': successColors.success200,
    '--outline-active-color': successColors.success300,
  },
  danger: {
    '--main-color': errorColors.error700,
    '--contrast-color': brandColors.white,
    '--hover-color': errorColors.error800,
    '--active-color': errorColors.error900,
    '--disabled-color': errorColors.error400,
    '--outline-hover-color': errorColors.error200,
    '--outline-active-color': errorColors.error300,
  },
  warning: {
    '--main-color': warningColors.warning700,
    '--contrast-color': brandColors.white,
    '--hover-color': warningColors.warning800,
    '--active-color': warningColors.warning900,
    '--disabled-color': warningColors.warning400,
    '--outline-hover-color': warningColors.warning200,
    '--outline-active-color': warningColors.warning300,
  },
}

theme.buttonSizes = {
  small: {
    fontSize: 'small',
    paddingLeft: 3,
    paddingRight: 3,
    // no array for height so pixels for now
    height: '40px',
  },
  medium: {
    // is this even valid size? Can we default size to 'medium'?
    // fontSize: '1rem',
    // height: '3rem',
    // minWidth: '3rem',
    // REFACTORED VALUES
    fontSize: 'default',
    lineHeight: '1.5em',
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
    paddingTop: '.75em',
    paddingBottom: '.75em',
  },
  large: {
    // we don't have large size in the figma - should we remove it as an option?
    // fontSize: '1.5rem',
    // height: '4rem',
    // minWidth: '4rem',
    // REFACTORED VALUES
    fontSize: 'large',
    lineHeight: '1.5rem',
    paddingLeft: '1.75rem',
    paddingRight: '1.75rem',
    paddingTop: '.8rem',
    paddingBottom: '.8rem',
  },
}

export default theme
