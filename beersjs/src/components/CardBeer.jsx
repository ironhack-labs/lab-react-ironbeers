import React from "react";

export const CardBeer = ({props}) => {
  const {name, brewers_tips, description, image_url} = props;

  return (
  <div className="CardBeer">  
    <img className="cardPhoto" src={image_url} alt='foto'/>
    <p className="textWith">{name}</p>
    <p className="textWith">{brewers_tips}</p>
    <p className="textWith">{description}</p>
    
  </div>)
};
