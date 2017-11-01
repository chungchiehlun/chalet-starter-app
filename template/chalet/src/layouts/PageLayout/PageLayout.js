import React from 'react';
import { Link } from 'react-router-dom';
import './PageLayout.css';

export const PageLayout = () => (
  <section>
    <ul styleName="navbar">
      <li>
        <h1>Create Starter App</h1>
      </li>
      <li>
        <Link to="/" styleName="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/counter" styleName="link">
          Counter
        </Link>
      </li>
    </ul>
  </section>
);

export default PageLayout;
