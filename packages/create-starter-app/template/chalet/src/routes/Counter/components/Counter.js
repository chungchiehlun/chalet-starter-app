import React from 'react';
import PropTypes from 'prop-types';
import './Counter.module.css';

export const Counter = ({ counter, increment, doubleAsync }) => (
  <div styleName="counter">
    <h2>Counter: {counter}</h2>
    <button styleName="btn" onClick={increment}>
      Increment
    </button>
    <button styleName="btn" onClick={doubleAsync}>
      Double (Async)
    </button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired
};

export default Counter;
