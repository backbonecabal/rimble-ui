import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import FileInput from './FileInput'
import { StyledBox } from '../Box'

const StyledInput = styled(StyledBox).attrs(props => ({
  as: 'input',
}))`
  & {
    appearance: none;
  }

  &:hover {
    /* need to move into token - currently not tokenized in Figma */
    box-shadow: 0px 3px 6px rgba(0, 10, 40, 0.06) 
  }

  &:focus {
    outline: none;
    border-color: ${themeGet('colors.primary700')};
  }

  &:disabled {
    background-color: ${themeGet('colors.base100')};
    pointer-events: none;
  }

  &::placeholder {
    color: ${themeGet('colors.base600')};
  }

  &[type="color"] {
    min-width: 3rem;
    padding: 0;
    &::-webkit-color-swatch-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
    &::-webkit-color-swatch {
      flex: 0 0 auto;
      height: 2rem;
      width: 2rem;
      border: none;
      border-radius: 100%;
    }
    &::-moz-color-swatch {
      height: 2rem;
      width: 2rem;
      border: none;
      border-radius: 100%;
    }
  }

  .was-validated & {
    &:invalid {
      border-color: ${themeGet('colors.error500')};
      background: ${themeGet('colors.error100')};
      
      &:focus {
        border-color: ${themeGet('colors.primary700')};
      }
    }
  }}
`

const WithValidationStyle = React.forwardRef((props, ref) => {
  return <StyledInput {...props} ref={ref} />
})

const Input = React.forwardRef((props, ref) => {
  if (props.type === 'file') {
    return <FileInput {...props} ref={ref} />
  } else {
    return <StyledInput {...props} ref={ref} />
  }
})

const defaultProps = {
  color: 'text',
  bg: 'background',
  fontFamily: 'inherit',
  fontSize: 'default',
  lineHeight: 'initial',
  height: '48px',
  px: '20px',
  border: 1,
  borderColor: 'base400',
  borderRadius: 1,
}

Input.WithValidationStyle = WithValidationStyle

WithValidationStyle.defaultProps = defaultProps
StyledInput.defaultProps = defaultProps
Input.defaultProps = defaultProps

Input.propTypes = {
  theme: PropTypes.object,
}

Input.displayName = 'Input'

export { StyledInput }

export default Input
