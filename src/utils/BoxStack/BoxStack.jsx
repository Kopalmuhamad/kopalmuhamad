import React from "react";
import "./BoxStack.scss";

const BoxStack = ({ data }) => {
  return (
    <div className="stack-wrapper">
      {data.map((items, index) => {
        return (
          <div className="box-stack" key={index}>
            <i className="uil uil-check-circle stack-icons"></i>
            <p className="stacks">{items.stack}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BoxStack;
