import React from "react";

const BeerCard = props => {
  const beer = props.beer;
  return (
    <a href={"/beers/" + beer._id}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1em",
          border: "1px solid grey"
        }}
      >
        <img src={beer.image_url} height="100px" alt="one beer" />
        <div style={{ textAlign: "left", paddingLeft: "1em" }}>
          {beer.name}
          <br />
          {beer.tagline}
          <br />
          Contributed by {beer.contributed_by}
        </div>
      </div>
    </a>
  );
};

export default BeerCard;
