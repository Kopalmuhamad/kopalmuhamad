import React from "react";
import "./Social.scss";

const Social = ({ containerClassName, iconsClassName }) => {
  return (
    <div className={`social-container ${containerClassName}`}>
      <a href="#" className={`social-icons ${iconsClassName}`}>
        <i className="uil uil-instagram"></i>
      </a>
      <a href="#" className="social-icons">
        <i className="uil uil-facebook"></i>
      </a>
      <a href="#" className="social-icons">
        <i className="uil uil-linkedin"></i>
      </a>
      <a href="#" className="social-icons">
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
