import React from "react";

export default function beerDetails(props) {
  //console.log("props", props.name);
  return (
    <div>
      <img src={props.image_url} alt={props.name} />
      <h3>{props.name}</h3>;<h3>{props.tagline}</h3>;
      <h3>{props.contributed_by}</h3>;
    </div>
  );
}
