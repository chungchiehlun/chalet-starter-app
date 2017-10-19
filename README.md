## Create Starter App
Cheat starter app is the reborn [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) with the advantage of [create-react-app](https://github.com/facebookincubator/create-react-app).

*React redux starter kit* was mature project and contained many production-based npm packages such as [redux](https://github.com/reactjs/redux), [redux-thunk](https://github.com/gaearon/redux-thunk), [react-router](https://github.com/ReactTraining/react-router), and so on. Furthermore, its [Fractal Project Structure](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) is a creative concept and make the folder structure clear. It's absolutely one of awesome starter kits. Unfortunately, it was [deprecation](https://github.com/davezuko/react-redux-starter-kit#deprecation-warning).

*Create react app* was a good substitution. It has an elaborate [user guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) and convenient packages like [react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts) which make developers do not have to face too much [fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4) such as webpack, babel, eslint, and so on. We do not have to reinvent the wheel and can concentrate our attention on business logic.

Accordingly, **create-starter-app** not only succeeded to `react-redux starter-kit` but also applied the advantage of `create-react-app` to it.


## Getting Started
**Create-starter-app** was based on create-react-app. Like create-react-app, it contained global command [create-starter-app](https://www.npmjs.com/package/create-starter-app) and its custom scripts [starter-scripts](https://www.npmjs.com/package/starter-scripts). Please install creat-react-app before installation of `create-starter-app`. The complete command showed below.

```sh
npm install -g create-react-app
npm install -g create-starter-app

create-starter-app my-app
cd my-app/
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>

<img src='https://raw.githubusercontent.com/chungchiehlun/create-starter-app/master/assets/chalet.png' width=350 />


## Project-based Feature
When using **create-starter-app**, you will get merely *react*, *react-dom* in your project folder. However, if you hope to bootstrap a project, the *redux*, *react-router*, *redux-thunk* and so on is necessary. That's why **create-starter-app** come. Absolutely! You could also refer to the elaborate document of create-react-app [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) to enhance your project.

After bootstraping your project, it contained some useful feature as follows.

### [react css module](https://github.com/gajus/react-css-modules)
This automates loading of CSS Modules using styleName property, e.g.

```jsx
import 'styleContainsBar.css'

<span styleName='Bar'>World</span>
// Boo is modular now and do not pollute any other css stylesheet.
```

### fractal project structure
Please see complete explanation [here](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure).

## License
MIT

## Authors
- Jay Chung - [twitter](https://twitter.com/wuceh14678)
