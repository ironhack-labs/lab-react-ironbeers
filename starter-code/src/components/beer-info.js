import React from "react";
import styled from "styled-components";

const Beer = styled.div`
  padding: 20px;

  .image {
    text-align: center;
    img {
      height: 250px;
    }
  }

  h1 {
    display: inline-block;
    width: 80%;
  }

  .attenuation {
    float: right;
    margin-top: 30px;
    color: gray;
  }

  .tagline {
    display: inline-block;
    margin: 0;
  }

  .brewed {
    float: right;
    margin: 0;
  }
`;

const BeerInfo = props => {
  const beer = props.beer;

  return (
    <Beer>
      <div className="image">
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <h1>{beer.name}</h1>
      <h2 className="attenuation">{beer.attenuation_level}</h2>
      <h4 className="tagline">{beer.tagline}</h4>
      <p className="brewed">{beer.first_brewed}</p>
      <p>{beer.description}</p>
      <small>{beer.contributed_by}</small>
    </Beer>
  );
};

export default BeerInfo;
