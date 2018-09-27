# Create Starter App

As a frontend developer, I faced too much [fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4), e.g., webpack, babel, eslint. However, I merely hope to concentrate on the _react redux world_ and do something cool with them.

[Create-react-app](https://github.com/facebookincubator/create-react-app) indeed fulfilled my need and has the elaborate [user guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) but its [template](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts/template) only contains _react_. In my opinion, when launching a project, it's necessary to use _redux_, _react-router_, _[postcss-plugins](https://github.com/postcss/postcss/blob/master/docs/plugins.md)_ and so on. Many awesome react redux boilerplates and starter-kits did the stuff. `create-starter-app` created _template_ based on these stuff and you still enjoy all the advantage of create-react-app.

## Getting Started

**Create-starter-app (CSA)** was based on create-react-app. Accordingly, please run `yarn global add create-react-app` at first if you never used it. CSA contained global command [create-starter-app](https://www.npmjs.com/package/create-starter-app) and its custom scripts [starter-scripts](https://www.npmjs.com/package/starter-scripts).

Further, choose a template to launch your project. If you do not choose one, it applied the _chalet_ as default.

```sh
$ npx create-starter-app my-app
$ cd my-app/
$ npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

## Template

### plain

Original [template](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts/template) from `create-react-app` contains react but redux.

### chalet

Project ready template use the underlying [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) contains _react_, _redux_, _redux-thunk_, _react-router_ and _connected-react-router_.

## Starter sciprts

[React-scripts](https://www.npmjs.com/package/react-scripts) of create-react-app did not support css module and useful postcss feature but [starter-scripts](https://www.npmjs.com/package/starter-scripts) contained these feature and more.

### combine css-module with react

**[babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules)**

```jsx
import 'styleContainsBar.module.css'

<span styleName='Bar'>World</span>
// Bar is local css and do not pollute any other css stylesheet.
```

### both _global_ and _local_ css have the following postcss feature

- [postcss-preset-env](https://github.com/csstools/postcss-preset-env) (stage: 0)
- [lost](https://github.com/peterramsing/lost)

## License

MIT

## Authors

- Jay Chung - [twitter](https://twitter.com/wuceh14678)
