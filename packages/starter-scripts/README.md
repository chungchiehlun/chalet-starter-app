# starter-scripts

A custom fork of `react-scripts`. This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app). Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

### Why use `starter-scripts` instead of `react-scripts` ?

This package has a custom attribute `styleName` make you combine react and css-module in a concise way. (see more on **[react-css-modules](https://github.com/gajus/react-css-modules)**)

```jsx
import './hello.module.css'

<span styleName='bar'>World</span>
// "bar" is a class name defined in `hello.module.css` and do not pollute any other class.
```

### How to migrate from `react-scripts` to `starter-scripts` ?

1. `yarn add starter-scripts`

2. Replace _react-scripts_ with _starter-scripts_ in `package.json`.

> If you created project with typescript option, replace `types="react-scripts" />` with `types="starter-scripts"` in `react-app-env.d.ts`.

####package.json

```json
{
  "scripts": {
    "start": "starter-scripts start",
    "build": "starter-scripts build",
    "test": "starter-scripts test",
    "eject": "starter-scripts eject"
  }
}
```

#### react-app-env.d.ts

```
/// <reference types="starter-scripts" />
```
