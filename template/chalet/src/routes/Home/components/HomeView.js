import React from 'react';
import ChaletImage from '../assets/Chalet.jpg';
import './HomeView.css';

export const HomeView = () => (
  <div styleName="wrapper">
    <img
      alt="This is a duck, because Redux!"
      className="chalet"
      src={ChaletImage}
    />
    <span className="source">
      {`Image originated from: `}
      <a href="https://goo.gl/hWSqjM">{`goo.gl/hWSqjM`}</a>
    </span>
  </div>
);

export default HomeView;
