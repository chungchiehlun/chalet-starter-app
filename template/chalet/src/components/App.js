import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import PageLayout from '../layouts/PageLayout';
import Home from '../routes/Home';
import Counter from '../routes/Counter';

import './App.css';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div>
            <PageLayout />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/counter" component={Counter(this.props.store)} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
