import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit orci eget lacinia consectetur. Curabitur varius nisi pulvinar nunc efficitur pharetra. Mauris non enim non libero consequat lobortis.'

  return (
    <div className="card mb-2" style={{width: "22rem"}}>
      <img src={props.image} className="card-img-top" alt={props.name} />
      <div className="card-body pb-2">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text" style={{fontSize: ".8rem" }}>
          {loremIpsum}
        </p>        
      </div>
    </div>
  );
};

export default Card;