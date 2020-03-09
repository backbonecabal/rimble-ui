import React from 'react'
import styled from 'styled-components'
import Button, { StyledButton } from './BaseButton'

// text
const StyledTextButton = styled(StyledButton)`
  & {
    color: var(--main-color);
    border: none;
    background: none;
    box-shadow: none;
  }

  &:hover {
    text-decoration: underline;
    background: none;
    box-shadow: none;
  }

  &:active {
    text-decoration: none;
  }

  &::before {
    display: none;
  }
`

const TextButton = React.forwardRef((props, ref) => {
  return <StyledTextButton {...props} ref={ref} />
})

TextButton.defaultProps = {
  ...Button.defaultProps,
}

export default TextButton
