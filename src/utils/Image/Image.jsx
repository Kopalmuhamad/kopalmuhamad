import React from "react";
import "./Image.scss";

const Image = ({ imgClassName }) => {
  return <div className={`image ${imgClassName}`}></div>;
};

export default Image;
