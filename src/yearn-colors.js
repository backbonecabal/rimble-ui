import { tint, shade, readableColor } from 'polished'

const baseColors = {
  black: '#000',
  white: '#FFF',
  blue: '#0657F9',
  green: '#28C081',
  yellow: '#FABF06',
  red: '#EF1E02',
  yearnblue: '#0657F9',
  prussianblue: '#3259D6',
}

const colors = {
  yearnblue: {
    base: baseColors.yearnblue,
    text: readableColor(baseColors.yearnblue),
    light: [null, tint(0.2, baseColors.yearnblue)],
    dark: [null, shade(0.2, baseColors.yearnblue)],
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

const yearnblue = colors.yearnblue
const blue = colors.blue
const green = colors.green
const yellow = colors.yellow
const red = colors.red

export { yearnblue }
export { blue }
export { green }
export { yellow }
export { red }

export default baseColors
