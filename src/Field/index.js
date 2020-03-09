import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from '../Box'
import Text from '../Text'
import { themeGet } from '@styled-system/theme-get'

const RequiredLabel = styled(Text)`
  &:after {
    content: ' *';
    font-weight: normal;
    color: ${themeGet('colors.error700')};
  }
`

const Field = React.forwardRef(({ label, children, ...props }, ref) => {
  const isRequired = children => {
    let value = false
    React.Children.forEach(children, child => {
      if (child.props.required) {
        value = true
      }
    })
    return value
  }

  const renderLabel = required => {
    if (required) {
      return (
        <RequiredLabel fontSize={'small'} fontWeight={'label'} mb={2}>
          {label}
        </RequiredLabel>
      )
    } else {
      return (
        <Text fontSize={'small'} fontWeight={'label'} mb={2}>
          {label}
        </Text>
      )
    }
  }

  return (
    <Box
      as={'label'}
      display={'inline-flex'}
      flexDirection={'column'}
      alignItems={'flex-start'}
      mb={3}
      ref={ref}
      {...props}
    >
      {renderLabel(isRequired(children))}
      {children}
    </Box>
  )
})

Field.propTypes = {
  // ...Box.propTypes,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

Field.displayName = 'Field'

export default Field
