import React from "react";
import Single from "../Single/Single"

function Random(props) {
  let randomNumber = Math.floor(Math.random() * props.listOfBeers.length);

  let theBeer = props.listOfBeers[randomNumber];

  // console.log(theBeer)
  return (
    <div>
      <Single randomBeer={theBeer._id} listOfBeers={props.listOfBeers} />
    </div>
  );
}
export default Random;
