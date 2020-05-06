# starter-scripts

A custom fork of `react-scripts`. This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app). Please refer to its documentation:

- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

### Getting Started

Create an App or update an existing project

```bash
$ yarn create react-app --scripts-version starter-scripts my-app
```

or update an existing project, install _starter-scripts_.

```bash
$ yarn add starter-scripts
```

Next, replace _react-scripts_ with _starter-scripts_ in `package.json`.

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

If you created project with typescript template, replace `types="react-scripts" />` with `types="starter-scripts"` in `react-app-env.d.ts`.

```
/// <reference types="starter-scripts" />
```

### Why use `starter-scripts` instead of `react-scripts` ?

This package has a custom attribute `styleName` make you combine react and css-module in a concise way. (see more on **[react-css-modules](https://github.com/gajus/react-css-modules)**)

```jsx
import './hello.module.css'

<span styleName='bar'>World</span>
// "bar" is a class name defined in `hello.module.css` and do not pollute any other class.
```
