import React from 'react';
import { Tooltip } from 'yearn-design'

export default {
  title: 'Tooltip',
}

export const tooltip = () => (
  <Box m={6}>
    <Text>Hover (default)</Text>
    <Box m={3}>
      <Tooltip title="Tooltip" message="Top tooltip" placement="top">
        <Box as="span">Hover me</Box>
      </Tooltip>
    </Box>
    <Box m={3}>
      <Tooltip title="Tooltip" message="Left tooltip" placement="left">
        <Box as="span">Hover me</Box>
      </Tooltip>
    </Box>
    <Box m={3}>
      <Tooltip title="Tooltip" message="Right tooltip" placement="right">
        <Box as="span">Hover me</Box>
      </Tooltip>
    </Box>
    <Box m={3}>
      <Tooltip title="Tooltip" message="Bottom tooltip" placement="bottom">
        <Box as="span">Hover me</Box>
      </Tooltip>
    </Box>

    <Text>Click</Text>
    <Box m={3}>
      <Tooltip
        title="Tooltip"
        message="Top tooltip"
        placement="top"
        trigger="click"
      >
        <Box as="span">Click me</Box>
      </Tooltip>
    </Box>
    <Box m={3}>
      <Tooltip
        title="Tooltip"
        message="Left tooltip"
        placement="left"
        trigger="click"
      >
        <Box as="span">Click me</Box>
      </Tooltip>
    </Box>
    <Box m={3}>
      <Tooltip
        title="Tooltip"
        message="Right tooltip"
        placement="right"
        trigger="click"
      >
        <Box as="span">Click me</Box>
      </Tooltip>
    </Box>
    <Box m={3}>
      <Tooltip
        title="Tooltip"
        message="Bottom tooltip"
        placement="bottom"
        trigger="click"
      >
        <Box as="span">Click me</Box>
      </Tooltip>
    </Box>
  </Box>
)
