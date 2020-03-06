import React from 'react'
import { Field, Input, Box } from 'rimble-ui'

export default {
  title: 'Field',
}

export const field = () => (
  <Box>
    <Box>
      <Field label="Public address">
        <Input required={true} placeholder={'0x000000'} />
      </Field>
    </Box>
    <Box>
      <Field label="Email address">
        <Input type="email" placeholder={'name@example.com'} />
      </Field>
    </Box>
  </Box>
)
