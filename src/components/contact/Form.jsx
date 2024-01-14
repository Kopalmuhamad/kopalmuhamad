import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";

const Form = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation: Check if form fields are not empty
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!userEmail || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_yx0tgar",
        "template_dtvu69j",
        form.current,
        "4fN6jNuoluYEd1zc7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsSending(false);
        form.current.reset();
      });
  };
  return (
    <form className="form-container" ref={form} onSubmit={sendEmail}>
      <input
        type="email"
        name="user_email"
        className="email-input"
        placeholder="Email :"
      />
      <textarea
        name="message"
        placeholder="Message :"
        className="textarea-input"
      ></textarea>
      <button type="submit" className="form-button" disabled={isSending}>
        {isSending ? "Loading..." : "Send"}{" "}
        {isSending ? (
          <i className="uil uil-spinner-alt"></i>
        ) : (
          <i className="uil uil-message"></i>
        )}
      </button>
    </form>
  );
};

export default Form;
