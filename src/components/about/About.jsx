import React from "react";
import "./About.scss";
import HeaderSection from "../../utils/headerSection/HeaderSection";
import Image from "../../utils/Image/Image";
import Data from "../../utils/Data/Data";
import Card from "../../utils/Card/Card";
import CV from "../../assets/Muhamad Kopal.pdf";

import { experienceData } from "../../libs/experience";

const About = () => {
  const propsData = {
    description:
      "Saya adalah frontend developer pemula dengan pengalaman lebih dari 1 tahun. Mahir dalam HTML, CSS, dan JavaScript, serta berpengalaman dengan React.",
    button: "Download CV",
    icons: "uil uil-file-download",
  };

  return (
    <section className="about" id="about">
      <main className="about-container">
        <HeaderSection
          title={"About Me"}
          subtitle={"My Introduction"}
          className={"header-section"}
        />
        <Image imgClassName={"about-image"} />
        <div className="about-data-container">
          <div className="card-container">
            <Card data={experienceData} />
          </div>
          <Data
            data={propsData}
            containerClassName={"about-data"}
            descriptionClassName={"data-description"}
            buttonClassName={"data-button"}
            hrefButton={CV}
          />
        </div>
      </main>
    </section>
  );
};

export default About;
