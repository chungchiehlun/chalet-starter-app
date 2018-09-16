## Create Starter App

As a frontend developer, I faced too much [fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4), e.g., webpack, babel, eslint. However, I merely hope to concentrate on the _react redux world_ and do something cool with them.

[Create-react-app](https://github.com/facebookincubator/create-react-app) indeed fulfilled my need and has the elaborate [user guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) but its [template](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts/template) only contains _react_. In my opinion, when launching a project, it's necessary to use _redux_, _react-router_, _[postcss-plugins](https://github.com/postcss/postcss/blob/master/docs/plugins.md)_ and so on. Many awesome react redux boilerplates and starter-kits did the stuff. `create-starter-app` created template based on these stuff and you could enjoy all the advantage of create-react-app.

## Getting Started

**Create-starter-app** was based on create-react-app. Like create-react-app, it contained global command [create-starter-app](https://www.npmjs.com/package/create-starter-app) and its custom scripts [starter-scripts](https://www.npmjs.com/package/starter-scripts). Please install creat-react-app before the installation of `create-starter-app`. The complete command showed below.

Further, choose a template to launch your project.
If you do not choose one, it applied the **chalet** as default.

```sh
npm install -g create-react-app
npm install -g create-starter-app
create-starter-app my-app --template chalet
cd my-app/
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>

## Template

### plain

original [template](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts/template) from `create-react-app` contains react but redux

### chalet

project ready template based on [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) contains _react_, _redux_, _redux-thunk_, _react-router_ and _connected-react-router_.

## Starter sciprts

Create-react-app did not support css modules and postcss features. Accordingly, I published [starter-scripts](https://www.npmjs.com/package/starter-scripts) that contained these and [react-css-module](https://github.com/gajus/react-css-modules). Any comments and suggestions are welcome! ([issue#1](https://github.com/chungchiehlun/create-starter-app/issues/1))

### Usage with `react css module`

```jsx
import 'styleContainsBar.css'

<span styleName='Bar'>World</span>
// Boo is modular now and do not pollute any other css stylesheet.
```

## License

MIT

## Authors

- Jay Chung - [twitter](https://twitter.com/wuceh14678)
