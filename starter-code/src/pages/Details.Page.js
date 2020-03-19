import React, { useContext } from "react";
import { BeersContext } from "../contexto/beers.Context";
import styled from "styled-components";

const DetailsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  .box-img {
    margin-bottom: 25px;
    width: 100%;
    img {
      display: block;
      margin: 0 auto;
      max-width: 150px;
      max-height: 300px;
    }
  }
  h2 {
    box-sizing: border-box;
    color: #000;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    font-size: 40px;
    margin: 0 0 10px;
    width: 80%;
    & + p {
      display: inline-block;
      color: #979797;
      font-size: 36px;
      margin: 0;
      text-align: right;
      margin: 0 0 10px;
      width: 20%;
    }
  }
  h3 {
    box-sizing: border-box;
    color: #979797;
    font-size: 22px;
    margin: 0;
    width: 80%;
    & + p {
      width: 20%;
      text-align: right;
      margin: 0;
    }
  }
  p {
    color: #3e3e3e;
    font-size: 16px;
    line-height: 24px;
    margin: 20px 0;

    &:last-child {
      font-weight: 700;
      color: #979797;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 30px;
      padding-right: 10px;
    }
    h3 {
      font-size: 20px;
      padding-right: 10px;
    }
  }
`;

export const DetailsPage = props => {
  const { getBeers } = useContext(BeersContext);
  const beerId = props.match.params.id;
  const beer = getBeers(beerId);

  return (
    <DetailsContainer>
      <div className="box-img">
        <img src={beer.image_url} title={beer.name} alt={beer.name} />
      </div>
      <h2>{beer.name}</h2>
      <p>{beer.attenuation_level}</p>
      <h3>{beer.tagline}</h3>
      <p>{beer.first_brewed}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </DetailsContainer>
  );
};
