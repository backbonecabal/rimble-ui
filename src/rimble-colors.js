import { tint, shade, readableColor } from 'polished'

// rimble base colors
const baseColors = {
  black: '#000A28', // need to refactor
  white: '#FFF', // ok
  blue: '#1A5AFE', // need to refactor
  green: '#008055', // need to refactor - using success700
  yellow: '#D9992B', // need to refactor - using warning600
  red: '#B20000', // need to refactor - using error700
  blurple: '#1A5AFE', // need to refactor - using primary500
  consensysblue: '#3259D6', // need to remove
}

// rimble palette
const colors = {
  blurple: {
    base: baseColors.blurple,
    text: readableColor(baseColors.blurple),
    light: [null, tint(0.2, baseColors.blurple)],
    dark: [null, shade(0.2, baseColors.blurple)],
  },
  blue: {
    base: baseColors.blue,
    text: readableColor(baseColors.blue),
    light: [null, tint(0.9, baseColors.blue)],
    dark: [null, shade(0.4, baseColors.blue)],
  },
  green: {
    base: baseColors.green,
    text: baseColors.white,
    light: [null, tint(0.9, baseColors.green)],
    dark: [null, shade(0.4, baseColors.green)],
  },
  yellow: {
    base: baseColors.yellow,
    text: readableColor(baseColors.yellow),
    light: [null, tint(0.9, baseColors.yellow)],
    dark: [null, shade(0.4, baseColors.yellow)],
  },
  red: {
    base: baseColors.red,
    text: readableColor(baseColors.red),
    light: [null, tint(0.9, baseColors.red)],
    dark: [null, shade(0.4, baseColors.red)],
  },
}

const blurple = colors.blurple
const blue = colors.blue
const green = colors.green
const yellow = colors.yellow
const red = colors.red

export { blurple }
export { blue }
export { green }
export { yellow }
export { red }

export default baseColors
