import React from 'react';
import { Textarea } from 'yearn-design'

export default {
  title: 'Textarea'
}

export const textarea = () => (
  <Textarea rows={4} defaultValue={'Start typing… '} />
)
