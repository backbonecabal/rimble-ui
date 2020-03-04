import React from 'react'
import { Button, MetaMaskButton, UPortButton, Box } from 'rimble-ui'

export default {
  title: 'Buttons',
}

export const solid = () => (
  <Box>
    <Box my={3}>
      <Button>Solid Button</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Error</Button>
      <Button variant="warning">Warning</Button>
    </Box>
    <Box my={3}>
      <Button size="small">Solid Button</Button>
      <Button variant="success" size="small">
        Success
      </Button>
      <Button variant="danger" size="small">
        Error
      </Button>
      <Button variant="warning" size="small">
        Warning
      </Button>
    </Box>
    <Box my={3}>
      <Button size="large">Solid Button</Button>
      <Button variant="success" size="large">
        Success
      </Button>
      <Button variant="danger" size="large">
        Error
      </Button>
      <Button variant="warning" size="large">
        Warning
      </Button>
    </Box>
    <Box my={3}>
      <Button disabled>Solid Button</Button>
      <Button variant="success" disabled>
        Success
      </Button>
      <Button variant="danger" disabled>
        Error
      </Button>
      <Button variant="warning" disabled>
        Warning
      </Button>
    </Box>
  </Box>
)

export const outline = () => <Button.Outline>Outline Button</Button.Outline>

export const text = () => <Button.Text>Text Button</Button.Text>

export const metaMaskSolid = () => (
  <MetaMaskButton>Connect with MetaMask</MetaMaskButton>
)

export const metaMaskOutline = () => (
  <MetaMaskButton.Outline>Connect with MetaMask</MetaMaskButton.Outline>
)

export const uPortSolid = () => (
  <UPortButton.Solid>Connect with uPort</UPortButton.Solid>
)

export const uPortOutline = () => <UPortButton>Connect with uPort</UPortButton>
