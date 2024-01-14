import React from "react";
import "./Hero.scss";
import Social from "../../utils/Social/Social";
import Image from "../../utils/Image/Image";
import Data from "../../utils/Data/Data";

const propsData = {
  title: "Muhamad Kopal",
  subtitle: "Front-end Developer",
  description: "I'll Code Yout Website",
  button: "Send",
  icons: "uil uil-message",
};

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <main className="hero-container">
        <Social
          containerClassName={"social-container"}
          iconsClassName={"social-icons"}
        />
        <Image imgClassName={"hero-img"} />
        <Data
          data={propsData}
          containerClassName={"data-container"}
          titleClassName={"data-title"}
          subtitleClassName={"data-subtitle"}
          descriptionClassName={"data-description"}
          buttonClassName={"hero-button"}
          hrefButton={"#contact"}
          isDownload={false}
        />
      </main>
    </section>
  );
};

export default Hero;
