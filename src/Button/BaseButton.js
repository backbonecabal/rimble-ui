import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { buttonStyle, variant, system } from 'styled-system'
import { StyledBox } from '../Box'

const buttonSize = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: 'small',
      paddingLeft: 3,
      paddingRight: 3,
      // no array for height so pixels for now
      height: '40px',
    },
    medium: {
      fontSize: 'default',
      paddingLeft: '24px',
      paddingRight: '24px',
      // no array for height so pixels for now
      height: '48px',
    },
  },
})

const mainColor = system({
  prop: 'mainColor',
  cssProperty: '--main-color',
  scale: 'colors',
})

const contrastColor = system({
  prop: 'contrastColor',
  cssProperty: '--contrast-color',
  scale: 'colors',
})

const hoverColor = system({
  prop: 'hoverColor',
  cssProperty: '--hover-color',
  scale: 'colors',
})

const activeColor = system({
  prop: 'activeColor',
  cssProperty: '--active-color',
  scale: 'colors',
})

const disabledColor = system({
  prop: 'disabledColor',
  cssProperty: '--disabled-color',
  scale: 'colors',
})

const outlineHoverColor = system({
  prop: 'outlineHoverColor',
  cssProperty: '--outline-hover-color',
  scale: 'colors',
})

const outlineActiveColor = system({
  prop: 'outlineActiveColor',
  cssProperty: '--outline-active-color',
  scale: 'colors',
})

const StyledButton = styled(StyledBox)`
  & {
    -webkit-font-smoothing: antialiased;
    appearance: none;
    user-select: none;
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    pointer-events: none;
  }

  > div > svg {
    display: block;
  }
  > div:first-child > svg {
    margin-left: -0.5rem;
    margin-right: .5rem;
  }
  > div:last-child > svg {
    margin-left: .5rem;
    margin-right: -0.5rem;
  }
  > div:first-child:last-child > svg {
    margin: 0;
  }

  ${mainColor}
  ${contrastColor}
  ${hoverColor}
  ${activeColor}
  ${disabledColor}
  ${outlineHoverColor}
  ${outlineActiveColor}
  ${buttonStyle}
  ${buttonSize}
`

StyledButton.defaultProps = {
  as: 'button',
}

const Button = React.forwardRef((props, ref) => {
  return <StyledButton {...props} ref={ref} />
})

Button.defaultProps = {
  // base props
  position: 'relative',
  fontSize: 'inherit',
  fontWeight: 'bold',
  lineHeight: 1,
  border: 'none',
  size: 'medium',
  variant: 'primary',
}

Button.propTypes = {
  /**
   * Sets theme
   */
  theme: PropTypes.object,
  /**
   * Sets background color of button
   */
  mainColor: PropTypes.string,
  /**
   * Sets text color of button
   */
  contrastColor: PropTypes.string,
  /**
   * Sets background color on hover of button
   */
  hoverColor: PropTypes.string,
  /**
   * Sets background color when active of button
   */
  activeColor: PropTypes.string,
  /**
   * Sets background color when button is disabled
   */
  disabledColor: PropTypes.string,
  /**
   * Sets background color on hover of outline button
   */
  outlineHoverColor: PropTypes.string,
  /**
   * Sets background color when active of outline button
   */
  outlineActiveColor: PropTypes.string,
  /**
   * Sets font and spacing size of button
   */
  size: PropTypes.oneOf(['small', 'medium']),
}

Button.displayName = 'Button'

export { StyledButton }

export default Button
