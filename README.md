# Create Starter App

**Create-starter-app (CSA)** underlies the powerful tool [create-react-app (CRA)](https://github.com/facebook/create-react-app) . It is not an alternatvie of CRA but contains all CSA features and more useful configuration.

The main difference between CSA and CRA is that CSA contains global command [create-starter-app](https://www.npmjs.com/package/create-starter-app) and its custom scripts [starter-scripts](https://www.npmjs.com/package/starter-scripts). Here is a concise introduction.

- `create-starter-app`: A cli tool which arguments and options are as same as CRA. Furthermore, it offers the `--template (-T)` option. You could choose a template but the CRA built-in one. See [Template](#Template).
- `starter-scripts`: A node script works as same as react-scripts and uses [react-css-modules](https://github.com/gajus/react-css-modules) and more postcss plugins. See [Feature](#Feature).

## Getting Started

```sh
$ npx create-starter-app my-app -T chalet
```

It will create a directory called `my-app` inside the current folder. Inside that directory, there's no configuration or complicated folder structures, just the files you need to build you app.

```
// Once the installation is done, you can open your project folder.
$ cd my-app

// Runs the app in development mode.
// Open http://localhost:3000 to view it in the browser
$ npm start or yarn start

// Runs the test watcher in an interactive mode.
$ npm test or yarn test

// Builds the app for production to the *build* folder.
$ npm run build or yarn build
```

The document of CRA is useful and elaborate. Feel free to apply features of CRA to CSA. You could get more information from the official [User Guide](https://facebook.github.io/create-react-app/docs/getting-started). If something doesn't work, please file an issue.

### Template

Choose a template to launch your project. CSA offers a elaborate `chalet` template which contains useful packges from react/redux ecosystem and basic scaffolding.

```bash
$ npx create-starter-app my-app --template chalet
```

###Feature

**[react-css-modules](https://github.com/gajus/react-css-modules)**

```jsx
import './hello.module.css'

<span styleName='Bar'>World</span>
// Bar is css class name defined in `hello.module.css` and do not pollute any other css stylesheet.
```

**Postcss plugins**

- [postcss-preset-env](https://github.com/csstools/postcss-preset-env) ( _stage: 0_ )
- [lost](https://github.com/peterramsing/lost)

> I merely applied these to my projects. If you hopes to integrate other plugins with starter-scripts, feel free to search from [here](https://github.com/postcss/postcss/blob/master/docs/plugins.md) and tell me how you apply the plugin(s) to your projects.

## License

MIT

## Authors

- Jay Chung - [twitter](https://twitter.com/wuceh14678)
