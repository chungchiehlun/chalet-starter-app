import React from 'react';
import { injectReducer } from '../../store/reducers';

function async(importComponent, importReducer, store) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
        reducer: null,
      };
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      const { default: reducer } = await importReducer();
      this.setState({
        component,
        reducer,
      });
    }
    render() {
      const { reducer, component } = this.state;
      if (reducer) {
        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'counter', reducer });
      }
      return component ? React.createElement(component, this.props) : null;
    }
  };
}

export default store =>
  async(
    /*
    - import() calls use promises internally. If using it with older browers, remember
    to shim Promise using a polyfill.

    - webpackChunkName in the comment will cause our separate bundle to be named
    counter.bundle.js instead of just [id].bundle.js.

    see (https://webpack.js.org/api/module-methods/#import-) for more information
   */
    () =>
      import(/* webpackChunkName: 'counter' */ './containers/CounterContainer'),
    () => import(/* webpackChunkName: 'counter' */ './modules/counter'),
    store
  );
