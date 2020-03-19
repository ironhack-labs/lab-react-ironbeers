import React from "react";

const HomeCard = ({ img, header, text }) => {
  return (
    <div>
      <img src={img} />
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
};

export default HomeCard;
