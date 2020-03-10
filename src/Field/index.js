import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from '../Box'
import Text from '../Text'
import { Report } from '@rimble/icons/es/md'
import { themeGet } from '@styled-system/theme-get'

const HelpText = props => <Text {...props} />

HelpText.defaultProps = {
  color: 'base700',
  fontSize: 'small',
  fontWeight: '400',
  lineHeight: '20px',
  mt: 2,
}

const InlineError = ({ children, ...props }) => (
  <Text {...props}>
    <Box display={'flex'} alignSelf={'flex-start'} mr={1}>
      <Report color={'error600'} size={'20px'} />
    </Box>
    {children}
  </Text>
)

InlineError.defaultProps = {
  color: 'error700',
  fontSize: 'small',
  fontWeight: '400',
  lineHeight: '20px',
  mt: 2,
  display: 'flex',
  alignItems: 'center',
}

const RequiredLabel = styled(Text)`
  &:after {
    content: ' *';
    color: ${themeGet('colors.error700')};
  }
`

const Field = React.forwardRef(
  ({ label, helpText, error, children, ...props }, ref) => {
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
          <RequiredLabel
            fontSize={'small'}
            fontWeight={'label'}
            lineHeight={'16px'}
            mb={2}
          >
            {label}
          </RequiredLabel>
        )
      } else {
        return (
          <Text
            fontSize={'small'}
            fontWeight={'label'}
            lineHeight={'16px'}
            mb={2}
          >
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
        mb={'24px'}
        ref={ref}
        {...props}
      >
        {renderLabel(isRequired(children))}
        {children}
        {helpText && <HelpText>{helpText}</HelpText>}
        {error && <InlineError>{error}</InlineError>}
      </Box>
    )
  }
)

Field.propTypes = {
  // ...Box.propTypes,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  helpText: PropTypes.string,
  error: PropTypes.string,
}

Field.displayName = 'Field'

export default Field
