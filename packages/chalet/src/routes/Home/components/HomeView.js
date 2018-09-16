import React from "react";
import ChaletImage from "../assets/Chalet.jpg";
import "./HomeView.module.css";

export const HomeView = () => (
  <div styleName="home">
    <img alt="chalet" styleName="chalet" src={ChaletImage} />
    <span styleName="source">
      {`Image originated from:`}
      <a href="https://goo.gl/hWSqjM">{"goo.gl/hWSqjM"}</a>
    </span>
  </div>
);

export default HomeView;
