import React from "react";
import "./Data.scss";

const Data = ({
  data,
  containerClassName,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  buttonClassName,
}) => {
  const { title, subtitle, description, button, icons } = data;

  return (
    <div className={`data-container ${containerClassName}`}>
      <h1 className={`data-title ${titleClassName}`}>{title}</h1>
      <h3 className={`data-subtitle ${subtitleClassName}`}>{subtitle}</h3>
      <p className={`data-description ${descriptionClassName}`}>
        {description}
      </p>
      <a href="#" className={`data-button ${buttonClassName}`}>
        {button}
        <i className={icons}></i>
      </a>
    </div>
  );
};

export default Data;
