# starter-scripts

This package customized configuration of [react-scripts](https://www.npmjs.com/package/react-scripts) and used by [Create Starter App](https://github.com/chungchiehlun/create-starter-app).

If you wanted to apply it to your existing project, please install this package first and add scripts showed below in your `package.json`. It's notable that **starter-scripts do not alter any underlying command of react-scripts**. Accordingly, the command is still `react-scripts ...` instead of `starter-scripts ...`.

```
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

Please refer to [Create Starter App](https://github.com/chungchiehlun/create-starter-app) for more information.
