import React from "react";

import { LoremIpsum } from "lorem-ipsum";

export const Section = ({ image, title }) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 1
    }
  });

  return (
    <>
      <img src={image} className="card-img-top" alt={`${title} Image`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{lorem.generateSentences(2)}</p>
      </div>
    </>
  );
};
