import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PageLayout.css';

export const PageLayout = ({ children }) => (
  <section>
    <ul styleName="nav">
      <li styleName="title">Chalet Starter App</li>
      <Link to="/" styleName="item">
        Home
      </Link>
      <Link to="/counter" styleName="item">
        Counter
      </Link>
    </ul>
    <div>{children}</div>
  </section>
);

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
