import React from 'react'
import styled from 'styled-components'

import { ButtonBody } from './BaseButton'
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

const OutlineButton = React.forwardRef(
  ({ children, icon, iconpos, ...props }, ref) => {
    return (
      <StyledOutlineButton {...props} ref={ref}>
        <ButtonBody icon={icon} iconpos={iconpos} children={children} />
      </StyledOutlineButton>
    )
  }
)

OutlineButton.defaultProps = {
  ...SolidButton.defaultProps,
  border: 1,
  boxShadow: 0,
}

export default OutlineButton
