import React from 'react'
import { Button, MetaMaskButton, UPortButton, Box } from 'rimble-ui'

export default {
  title: 'Buttons',
}

export const solid = () => (
  <Box>
    <Box my={3}>
      <Button>Default</Button>
      <Button variant="base">Base</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Error</Button>
      <Button variant="warning">Warning</Button>
    </Box>
    <Box my={3}>
      <Button size="small">Default</Button>
      <Button variant="base" size="small">
        Base
      </Button>
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
      <Button disabled>Default</Button>
      <Button variant="base" disabled>
        Base
      </Button>
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

export const outline = () => (
  <Box>
    <Box my={3}>
      <Button.Outline>Default</Button.Outline>
      <Button.Outline variant="base">Base</Button.Outline>
      <Button.Outline variant="success">Success</Button.Outline>
      <Button.Outline variant="danger">Error</Button.Outline>
      <Button.Outline variant="warning">Warning</Button.Outline>
    </Box>
    <Box my={3}>
      <Button.Outline size="small">Default</Button.Outline>
      <Button.Outline variant="base" size="small">
        Base
      </Button.Outline>
      <Button.Outline variant="success" size="small">
        Success
      </Button.Outline>
      <Button.Outline variant="danger" size="small">
        Error
      </Button.Outline>
      <Button.Outline variant="warning" size="small">
        Warning
      </Button.Outline>
    </Box>
    
    <Box my={3}>
      <Button.Outline disabled>Default</Button.Outline>
      <Button.Outline variant="base" disabled>
        Base
      </Button.Outline>
      <Button.Outline variant="success" disabled>
        Success
      </Button.Outline>
      <Button.Outline variant="danger" disabled>
        Error
      </Button.Outline>
      <Button.Outline variant="warning" disabled>
        Warning
      </Button.Outline>
    </Box>
  </Box>
)

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
