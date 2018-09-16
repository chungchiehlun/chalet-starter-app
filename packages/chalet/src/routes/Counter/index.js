import React from "react";
import { injectReducer } from "../../store/reducers";

function asyncRoute(importComponent, importReducer, store) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }
    static displayName = "asyncRoute(Counter)";
    async componentDidMount() {
      const { default: component } = await importComponent();
      const { default: reducer } = await importReducer();

      /* Inject 'counter' reducer to store */
      injectReducer(store, { key: "counter", reducer });

      this.setState({
        component
      });
    }
    render() {
      const { component } = this.state;

      // You could render a loading spinner instead of rendering null.
      return component ? React.createElement(component, this.props) : null;
    }
  };
}

export default store =>
  asyncRoute(
    /*
    - import() calls use promises internally. If using it with older browers, remember
    to shim Promise using a polyfill.

    - webpackChunkName in the comment will cause our separate bundle to be named
    counter.bundle.js instead of just [id].bundle.js.

    see (https://webpack.js.org/api/module-methods/#import-) for more information
   */
    () =>
      import(/* webpackChunkName: 'counter' */ "./containers/CounterContainer"),
    () => import(/* webpackChunkName: 'counter' */ "./modules/counter"),
    store
  );
