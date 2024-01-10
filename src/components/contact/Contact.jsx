import React from "react";
import "./Contact.scss";
import Form from "./Form";
import HeaderSection from "../../utils/headerSection/HeaderSection";
import Social from "../../utils/Social/Social";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <main className="contact-container">
        <HeaderSection
          title={"Contact"}
          subtitle={"Get in touch with me"}
          className={"header-section"}
        />
        <Form />
        <Social iconsClassName={"social-icons"} />
      </main>
    </section>
  );
};

export default Contact;
