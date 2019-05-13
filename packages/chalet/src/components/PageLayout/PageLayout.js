import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import './PageLayout.module.css';

export const PageLayout = props => (
  <section styleName="header">
    <h1>Chalet Template</h1>
    <ul styleName="navbar">
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

export default connect(
  null,
  dispatch => ({
    directTo: path => {
      dispatch(push(path));
    },
  })
)(PageLayout);
