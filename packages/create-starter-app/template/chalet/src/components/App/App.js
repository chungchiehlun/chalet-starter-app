import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import PageLayout from '../PageLayout';
import Home from '../../routes/Home';
import Counter from '../../routes/Counter';
import './App.module.css';

const a = Counter;

const App = props => {
  return (
    <Provider store={props.store}>
      <ConnectedRouter history={props.history}>
        <div styleName="app">
          <PageLayout />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/counter" component={Counter} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default App;
