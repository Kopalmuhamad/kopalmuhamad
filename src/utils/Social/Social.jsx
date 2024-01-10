import React from "react";
import "./Social.scss";

const Social = ({ containerClassName, iconsClassName }) => {
  return (
    <div className={`social-container ${containerClassName}`}>
      <a
        href="https://instagram.com/kopalllmuhamad"
        className={`social-icons ${iconsClassName}`}
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a href="https://facebook.com/kopalmuhamad" className="social-icons">
        <i className="uil uil-facebook"></i>
      </a>
      <a href="https://linkedin.com/in/muhamad-kopal" className="social-icons">
        <i className="uil uil-linkedin"></i>
      </a>
      <a href="https://github.com/Kopalmuhamad" className="social-icons">
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
