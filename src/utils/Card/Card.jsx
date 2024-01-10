import React from "react";
import "./Card.scss";

const Card = ({ data }) => {
  return (
    <>
      {data.map((items, index) => {
        return (
          <a href="#" className="cards" key={index}>
            <i className={items.icons}></i>
            {items.img && <img src={items.img} alt="" />}
            <h3>{items.name}</h3>
            <p>{items.description}</p>
          </a>
        );
      })}
    </>
  );
};

export default Card;
