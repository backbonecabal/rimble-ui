import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TooltipTrigger from 'react-popper-tooltip'
import theme from '../theme'
import Text from '../Text'
import { themeGet } from '@styled-system/theme-get'

/**
 * Tooltip display a message near to an anchoring element when the user's mouse hovers or focus is set on anchoring element.
 */

const TooltipContainer = styled(Text)`
  color: ${themeGet('colors.base000')};
  background-color: ${themeGet('colors.base900')};
  border: 1px solid ${themeGet('colors.base900')};
  border-radius: ${themeGet('radii.1')};
  display: flex;
  flex-direction: column;
  margin: 8px 12px;
  padding: 12px 16px;
  transition: opacity 0.3s;
  box-shadow: ${themeGet('shadows.1')};
  z-index: 2147483647;
`

TooltipContainer.defaultProps = {
  theme,
  fontFamily: 'sansSerif',
  fontSize: 'smallest',
}

const TooltipArrow = styled.div`
  height: 1rem;
  position: absolute;
  width: 1rem;

  &::before {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    width: 0;
  }

  &::after {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    position: absolute;
    width: 0;
  }

  &[data-placement*='bottom'] {
    height: 1rem;
    left: 0;
    margin-top: -0.4rem;
    top: 0;
    width: 1rem;
  }

  &[data-placement*='bottom']::before {
    border-color: transparent transparent ${themeGet('colors.base900')}
      transparent;
    border-width: 0 0.5rem 0.4rem 0.5rem;
    position: absolute;
    top: -1px;
  }

  &[data-placement*='bottom']::after {
    border-color: transparent transparent ${themeGet('colors.base900')}
      transparent;
    border-width: 0 0.5rem 0.4rem 0.5rem;
  }

  &[data-placement*='top'] {
    bottom: 0;
    height: 1rem;
    left: 0;
    margin-bottom: -1rem;
    width: 1rem;
  }

  &[data-placement*='top']::before {
    border-color: ${themeGet('colors.base900')} transparent transparent
      transparent;
    border-width: 0.4rem 0.5rem 0 0.5rem;
    position: absolute;
    top: 1px;
  }

  &[data-placement*='top']::after {
    border-color: ${themeGet('colors.base900')} transparent transparent
      transparent;
    border-width: 0.4rem 0.5rem 0 0.5rem;
  }

  &[data-placement*='right'] {
    height: 1rem;
    left: 0;
    margin-left: -0.7rem;
    width: 1rem;
  }

  &[data-placement*='right']::before {
    border-color: transparent ${themeGet('colors.base900')} transparent
      transparent;
    border-width: 0.5rem 0.4rem 0.5rem 0;
  }

  &[data-placement*='right']::after {
    border-color: transparent ${themeGet('colors.base900')} transparent
      transparent;
    border-width: 0.5rem 0.4rem 0.5rem 0;
    left: 6px;
    top: 0;
  }

  &[data-placement*='left'] {
    height: 1rem;
    margin-right: -0.7rem;
    right: 0;
    width: 1rem;
  }

  &[data-placement*='left']::before {
    border-color: transparent transparent transparent
      ${themeGet('colors.base900')};
    border-width: 0.5rem 0 0.5rem 0.4em;
  }

  &[data-placement*='left']::after {
    border-color: transparent transparent transparent
      ${themeGet('colors.base900')};
    border-width: 0.5rem 0 0.5rem 0.4em;
    left: 3px;
    top: 0;
  }
`

const Trigger = children => ({ triggerRef, getTriggerProps }) => (
  <span
    {...getTriggerProps({
      ref: triggerRef,
    })}
  >
    {children}
  </span>
)

const InnerTooltip = (message, title, hideArrow) => ({
  arrowRef,
  tooltipRef,
  getArrowProps,
  getTooltipProps,
  placement,
}) => (
  <TooltipContainer
    {...getTooltipProps({
      className: 'tooltip-container',
      ref: tooltipRef,
    })}
  >
    {!hideArrow && (
      <TooltipArrow
        {...getArrowProps({
          className: 'tooltip-arrow',
          'data-placement': placement,
          ref: arrowRef,
        })}
      />
    )}
    <Text fontSize="smallest" fontWeight="bold">
      {title}
    </Text>
    <Text fontSize="smallest">{message}</Text>
  </TooltipContainer>
)

const Tooltip = memo(
  ({ message, children, hideArrow, trigger, title, ...props }) => (
    <TooltipTrigger
      {...props}
      trigger={trigger}
      tooltip={InnerTooltip(message, title, hideArrow)}
    >
      {Trigger(children)}
    </TooltipTrigger>
  )
)

Tooltip.displayName = 'Tooltip'

Tooltip.defaultProps = {
  placement: 'bottom',
  message: 'props.message text',
  trigger: 'hover',
}

Tooltip.propTypes = {
  /** Determines what makes the tooltip appear. */
  trigger: PropTypes.oneOf(['hover', 'click']),
  /** Sets the placement of tooltip relative to anchoring element. */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** Sets the title of tooltip. Only accepts text and not markup. */
  title: PropTypes.string,
  /** Sets the content of tooltip. Only accepts text and not markup. */
  message: PropTypes.string,
  /** Does not show the directional arrow of the tooltip. */
  hideArrow: PropTypes.bool,
}

export default Tooltip
