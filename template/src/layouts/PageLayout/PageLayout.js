import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.css'

export const PageLayout = ({ children }) => (
  <section>
    <ul styleName='nav'>
      <li styleName='title'>Chalet Starter App</li>
      <IndexLink to='/' styleName='item'>Home</IndexLink>
      <Link to='/counter' styleName='item'>Counter</Link>
    </ul>
    <div>
      {children}
    </div>
  </section>
)

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
