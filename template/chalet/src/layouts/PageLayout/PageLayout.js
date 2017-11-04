import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import './PageLayout.css';

export const PageLayout = props => (
  <section>
    <ul styleName="navbar">
      <li>
        <h1>Chalet Template</h1>
      </li>
      <li>
        <span styleName="link" onClick={() => props.directTo('/')}>
          Home
        </span>
      </li>
      <li>
        <span styleName="link" onClick={() => props.directTo('/counter')}>
          Counter
        </span>
      </li>
    </ul>
  </section>
);

export default connect(null, dispatch => ({
  directTo: path => {
    dispatch(push(path));
  },
}))(PageLayout);
