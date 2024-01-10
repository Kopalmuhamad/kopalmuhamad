import React from "react";
import "./Stack.scss";
import HeaderSection from "../../utils/headerSection/HeaderSection";
import { digitalSkill, softSkill } from "../../libs/stackData";
import BoxStack from "../../utils/BoxStack/BoxStack";

const Stack = () => {
  return (
    <header className="stack" id="stack">
      <main className="stack-container">
        <HeaderSection
          title={"Stack"}
          subtitle={"My Technical Level"}
          className={"header-section"}
        />
        <BoxStack data={digitalSkill} />
        <BoxStack data={softSkill} />
      </main>
    </header>
  );
};

export default Stack;
