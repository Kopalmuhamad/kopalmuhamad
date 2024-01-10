import React from "react";
import "./Contact.scss";

const Form = () => {
  return (
    <form className="form-container">
      <input
        type="email"
        name="message"
        className="email-input"
        placeholder="Email :"
      />
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="Message :"
        className="textarea-input"
      ></textarea>
      <button type="submit" className="form-button">
        Send <i className="uil uil-message"></i>
      </button>
    </form>
  );
};

export default Form;
