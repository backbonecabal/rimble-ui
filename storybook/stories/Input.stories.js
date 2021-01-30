import React from 'react';
import { Input } from 'yearn-design'

export default {
  title: 'Input'
}

export const input = () => (
  <Input
    type={'text'}
    placeholder={'placeholder'}
    required={'true'}
  />
)
