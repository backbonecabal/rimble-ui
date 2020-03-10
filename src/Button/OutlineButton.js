import React from 'react'
import styled from 'styled-components'
import SolidButton, { StyledSolidButton } from './SolidButton'

// outline style
const StyledOutlineButton = styled(StyledSolidButton)`
  & {
    color: var(--main-color);
    border-color: var(--main-color);
    background: transparent;
  }

  &:hover {
    background: var(--outline-hover-color);
  }

  &:active {
    background: var(--outline-active-color);
  }

  &:disabled {
    background: transparent;
  }
`

const OutlineButton = React.forwardRef((props, ref) => {
  return <StyledOutlineButton {...props} ref={ref} />
})

OutlineButton.defaultProps = {
  ...SolidButton.defaultProps,
  border: 1,
  boxShadow: 0,
}

export default OutlineButton
