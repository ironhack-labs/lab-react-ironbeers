import React from "react";

export const HomeCard = ({ name, description, image_url }) => {
  return (
    <div className="HomeCard">
      <img className="cardHomePhoto" src={image_url} alt="foto" />
      <div className="textHomeWith">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
