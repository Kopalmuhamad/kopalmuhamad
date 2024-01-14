import React from "react";
import "./Project.scss";

import { projectData } from "../../libs/projectData";
import HeaderSection from "../../utils/headerSection/HeaderSection";
import Card from "../../utils/Card/Card";

const Project = () => {
  return (
    <section className="project" id="project">
      <main className="project-container">
        <HeaderSection
          title={"Project"}
          subtitle={"My result"}
          className={"header-section"}
        />
        <div className="card-container">
          <Card data={projectData} padding={"1rem"} />
        </div>
      </main>
    </section>
  );
};

export default Project;
