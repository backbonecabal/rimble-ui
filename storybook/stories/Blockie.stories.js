import React from 'react';
import { Blockie } from 'yearn-design'

export default {
  title: 'Blockie'
}

export const blockie = () => (
  <Blockie
    opts={{
      seed: 'foo',
      color: '#dfe',
      bgcolor: '#a71',
      size: 15,
      scale: 3,
      spotcolor: '#000',
    }}
  />
)
