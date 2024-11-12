
# @precooked/react-paper

![Precooked Logo](https://precookedcode.com/assets/logos/logo-horizontal-dark.svg)

The `@precooked/react-paper` package provides a reusable `Paper` component for React, designed to resemble a sheet of paper with a folded corner. It includes flexible sizing options and can be easily styled to suit your needs.

## Installation

```bash
npm install @precooked/react-paper
```

## Usage

Here is a basic example of how to use the `Paper` component:

```tsx
import React from "react";
import Paper from "@precooked/react-paper";

const App = () => {
  return (
    <Paper size="md" style={{ margin: "20px auto", textAlign: "center" }}>
      <h1>Hello, World!</h1>
    </Paper>
  );
};

export default App;
```

## Props

| Name   | Type                           | Default | Description                                    |
|--------|--------------------------------|---------|------------------------------------------------|
| `size` | `"sm" \| "md" \| "lg"`         | `"md"`  | Determines the size of the paper.             |
| `style`| `React.CSSProperties`          | `undefined` | Custom styles to apply to the Paper container.|
| `children` | `ReactNode`                | `undefined` | The content to render inside the Paper.       |

## Features

- Dynamic sizes (`sm`, `md`, `lg`) for flexibility.
- Styled entirely using JavaScript, no external CSS required.
- Built-in folded corner design for an enhanced visual appearance.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

