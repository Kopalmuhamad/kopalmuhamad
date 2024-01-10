import React from "react";
import "./HeaderSection.scss";

const HeaderSection = ({ title, subtitle, className }) => {
  return (
    <div className={`header-section ${className}`}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default HeaderSection;
