## Chalet Starter App
Chalet starter app is the reborn [react redux starter kit](https://github.com/davezuko/react-redux-starter-kit) with the advantage of [create-react-app](https://github.com/facebookincubator/create-react-app).

The *react redux starter kit* was mature project and contained much production-based npm package such as [redux](https://github.com/reactjs/redux), [redux-thunk](https://github.com/gaearon/redux-thunk), [react-router](https://github.com/ReactTraining/react-router), and so on. Furthermore, its [Fractal Project Structure](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) is a creative concept and make the folder structure clear. It's absolutely one of awesome starter kits. Unfortunately, it was [deprecation](https://github.com/davezuko/react-redux-starter-kit#deprecation-warning).

*Create react app* was a good substitution. It has an [elaborate user guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) and [useful scripts](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#available-scripts) which make developers do not have to configure *webpack*, *babel*, *eslint*, and so on. This saved a lot of effort and developers could concentrate their attention on business logic.

Accordingly, the project not only succeeded to *react redux starter kit* but also applied the advantage of *create react app* to it.


## Quick Overview
Like *create-react-app*, you don't need to use `git clone <the app repository>` every time you start a new project.

Just install **create-starter-app** instead of create-react-app at first.

```sh
npm install -g create-starter-app

create-starter-app my-app
cd my-app/
yarn start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `yarn run build`.

<img src='https://camo.githubusercontent.com/506a5a0a33aebed2bf0d24d3999af7f582b31808/687474703a2f2f692e696d6775722e636f6d2f616d794e66434e2e706e67' width='600' alt='npm start'>

## Feature
### react css module

```jsx
import 'styleContainsBar.css'

<span styleName='Bar'>World</span>
// Boo is modular and do not pollute any other css stylesheet.
```

### fractal project structure
Please see complete explanation [here](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure)

## Authors
- Jay Chung - [twitter](https://twitter.com/wuceh14678)
