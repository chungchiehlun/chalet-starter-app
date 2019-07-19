import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { increment, doubleAsync } from '../../../modules/counter';
import './Counter.module.css';

export const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div styleName="counter">
      <h2>Counter: {counter}</h2>
      <button styleName="btn" onClick={() => dispatch(increment(1))}>
        Increment
      </button>
      <button styleName="btn" onClick={() => dispatch(doubleAsync())}>
        Double (Async)
      </button>
    </div>
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
};

export default Counter;
