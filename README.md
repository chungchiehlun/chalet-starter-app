# Create Starter App

[create-react-app (CRA)](https://github.com/facebook/create-react-app): Create React apps with no build configuration.

**create-starter-app (CSA)**: Create React apps equipped with _redux ecosystem_, _more postcss plugins_ and _every CRA feature_ .

## Getting Started

**Create-starter-app (CSA)** was based on _create-react-app_. Accordingly, please run `yarn global add create-react-app` at first if you never used it. CSA contained global command [create-starter-app](https://www.npmjs.com/package/create-starter-app) and its custom scripts [starter-scripts](https://www.npmjs.com/package/starter-scripts). Further, choose a [template](#template) to launch your project. If you do not choose one, it applied the _chalet_ as default.

```sh
$ npx create-starter-app my-app
$ cd my-app/
$ npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

## template options

```bash
$ npx create-starter-app my-app --template <option>
```

**plain**

Original [template](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts/template) from `create-react-app` contains react but redux.

**chalet**

Project ready template use the underlying [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) that contains _react_, _redux_, _redux-thunk_, _react-router_ and _connected-react-router_.

## starter-sciprts features

> 🎉 [CRA 2.0](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html) has been released and integrated with CSA. 🎉

**combine css-module with react**

```jsx
import 'styleContainsBar.module.css'

<span styleName='Bar'>World</span>
// Bar is local css and do not pollute any other css stylesheet.
```

**more postcss feature**

- [postcss-preset-env](https://github.com/csstools/postcss-preset-env) ( _stage: 0_ )

- [lost](https://github.com/peterramsing/lost)

## License

MIT

## Authors

- Jay Chung - [twitter](https://twitter.com/wuceh14678)
