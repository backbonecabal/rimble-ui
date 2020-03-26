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

## Change log

### 0.14.0

🚀 New Feature

- Export ES6 modules for tree shaking 🌳

### 0.13.1

🐛 Bug Fix

- Added default props for `Heading` component.

### 0.13.0

🚀 New Feature

- Added crypto icons under the `Icon` component.

🐛 Bug Fix

- Fixed `Heading` component `as` prop not working.
- Fixed `Text` component `as` prop not working.
- Fixed `Select` component arrow icon placement.

### 0.12.0

🚀 New Feature

- Updated all components to `styled-system` v5.

### 0.11.1

🐛 Bug Fix

- Fixed icon background color on `ToastMessage` component. #381
- fixed display prop not rendering correctly for `Icon` component. #380
- fixed disabled styling for `Slider` component. #414

### 0.11.0

🚀 New Feature

- Added `BaseStyles` component

🐛 Bug Fix

- Updated `Text` component to pass `as` prop correctly.
- Updated `Heading` component to pass `as` prop correctly.
- Updated `Select` component to adjust width.
- Updated `Field` to inherit color.
- Updated `Radio` and `Checkbox` components to inherit text and icon colors correctly.
- Fixed `pre-commit deprecation warning` #372.
- Fixed warnings when building library #376.

💅 Enhancement

- Adjusted `EthAddress` component padding.
- Addeded default font sizes for `h1-h6` elements.
- Styled `input[type="color"]` for better visibility.
- Updated default props for `Input`, `Textarea`, `Card`.
- Removed `copyColor` from `theme.js`.
- Added `text` and `background` colors to `theme.js`.

### 0.10.0

- Fixed Select arrow display bug.
- Added missing props to QR component.
- Added title and aria-label attributes to EthAddress inputs (accessibility).
- Changed default module from `cjs` to `umd`.
- Upgraded to storybook app and updated stories.
- Reorganized component testing app (CRA).

### 0.9.8

- updated vulnerable dependencies.
- fixed onChange event not firing for file inputs.
- added new `EthAddress` component.

### 0.9.7

- fixed onChange events not firing for file inputs.

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

4. Start rollup to recompile the components on change

```bash
yarn start
```

5. Start storybook

Open a new terminal session to the sam base directory of the repo.

```bash
cd storybook && yarn && yarn storybook
```

You should get a new browser window that shows the storybook of all the components.

## License

MIT © [ConsenSys](https://github.com/ConsenSys)
