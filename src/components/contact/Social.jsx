import React from "react";
import "./Contact.scss";

const Social = () => {
  return (
    <div className="social-container">
      <a href="#" className="social-icons">
        <span>Instagram</span>
        <i className="uil uil-instagram"></i>
      </a>
      <a href="#" className="social-icons">
        <span>Whatsapp</span>
        <i className="uil uil-whatsapp"></i>
      </a>
      <a href="#" className="social-icons">
        <span>Facebook</span>
        <i className="uil uil-facebook"></i>
      </a>
      <a href="#" className="social-icons">
        <span>Email</span>
        <i className="uil uil-at"></i>
      </a>
    </div>
  );
};

export default Social;
