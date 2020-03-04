# Codefi components

> Codefi Design System&#x27;s react component library.

React components, built with styled-components and styled-system.

We are actively working on adding new components to Rimble and will be sharing more information on the roadmap very soon.

## Install

```bash
npm install --save @codefi-ds/core styled-components
```

## Usage

```jsx
import React, { Component } from 'react'

import { Button } from '@codefi-ds/core'

class Example extends Component {
  render() {
    return <Button size={'medium'}>Click me!</Button>
  }
}
```

## Develop components

This is a port of `rimble-ui`. We are in the process of moving these components into a monorepo and adding TypeScript. Please reach out on #rimble-design-system in Slack for updates.

1. Clone repo

```bash
git clone git@github.com:MikeLockz/rimble-ui.git // this will change soon
```

2. Navigate into repo and install dependencies

```bash
cd rimble-ui && yarn
```

3. Checkout codefi branch

```bash
git checkout codefi
```

3. Start storybook

```bash
cd storybook && yarn && yarn storybook
```

## License

MIT © [ConsenSys](https://github.com/ConsenSys)
