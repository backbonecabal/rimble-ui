import React from 'react'
import { Field, Input, Box } from 'rimble-ui'

export default {
  title: 'Field',
}

export const field = () => (
  <Field label="Email address">
    <Input type="email" placeholder={'name@example.com'} />
  </Field>
)

export const fieldRequired = () => (
  <Field label="Public address">
    <Input required={true} placeholder={'0x000000'} />
  </Field>
)

export const fieldWithHelpText = () => (
  <Field
    label="Email address"
    helpText={'Please enter your email address.'}
  >
    <Input type="email" placeholder={'name@example.com'} />
  </Field>
)


export const fieldWithError = () => (
  <Field
    label="Email address"
    error={'This field is required.'}
  >
    <Input type="email" placeholder={'name@example.com'} />
  </Field>
)
