import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { buttonStyle, variant, style } from 'styled-system'
import { StyledBox } from '../Box'
import Icon from '../Icon'

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes',
})

const mainColor = style({
  prop: 'mainColor',
  cssProperty: '--main-color',
  key: 'colors',
})

const contrastColor = style({
  prop: 'contrastColor',
  cssProperty: '--contrast-color',
  key: 'colors',
})

const hoverColor = style({
  prop: 'hoverColor',
  cssProperty: '--hover-color',
  key: 'colors',
})

const activeColor = style({
  prop: 'activeColor',
  cssProperty: '--active-color',
  key: 'colors',
})

const disabledColor = style({
  prop: 'disabledColor',
  cssProperty: '--disabled-color',
  key: 'colors',
})

const outlineHoverColor = style({
  prop: 'outlineHoverColor',
  cssProperty: '--outline-hover-color',
  key: 'colors',
})

const outlineActiveColor = style({
  prop: 'outlineActiveColor',
  cssProperty: '--outline-active-color',
  key: 'colors',
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
    padding: ${props => (props.icononly ? '0' : props.p)};
  }

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  > span.button-text {
    display: inline-flex;
  }

  ${'' /* with icon styles */}
  > div > svg,
  > span.button-text {
    position: relative;
    z-index: 1;
    user-select: none;
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

const ButtonBody = ({ children, icon, iconpos }) => {
  if (icon) {
    return (
      <React.Fragment>
        {icon && !iconpos && <Icon name={icon} />}
        {icon && iconpos == 'left' && <Icon name={icon} />}
        {children && <span className="button-text" children={children} />}
        {icon && iconpos == 'right' && <Icon name={icon} />}
      </React.Fragment>
    )
  } else {
    return <span className="button-text" children={children} />
  }
}

const Button = React.forwardRef((props, ref) => {
  return <StyledButton {...props} ref={ref} />
})

Button.defaultProps = {
  // base props
  position: 'relative',
  // height: '3rem', // why set a height vs y-pad?
  // minWidth: '3rem', // do we need this?
  px: 4, // shouldn't this come from the theme? // New theme SPACE property messed this up
  // py: 0, // shouldn't this come from the theme buttonSize variant?
  fontSize: 'inherit',
  fontFamily: 'sansSerif',
  fontWeight: 'body', // use an alias vs array index
  lineHeight: 1,
  // color props
  color: 'white',
  bg: 'base700',
  // mainColor: 'primary700',
  // contrastColor: 'white',
  // hoverColor: 'primary800',
  // activeColor: 'primary900',
  // disabledColor: 'primary400',

  border: 'none',
  outlineHoverColor: 'primary200',
  outlineActiveColor: 'primary300',
  size: 'medium',
  variant: 'primary', // does this work?
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Sets icon of button
   */
  icon: PropTypes.string,
  /**
   * Sets icon position on button
   */
  iconpos: PropTypes.oneOf(['left', 'right']),
  /**
   * Sets padding on button with icon and no text
   */
  icononly: PropTypes.bool,
}

Button.displayName = 'Button'

export { StyledButton, ButtonBody }

export default Button
