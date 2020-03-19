import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import useFetch from "./components/hooks/useFetch";
import Cards from "./components/UI/AllBeers";
import RandomCard from "./components/UI/RandomCard";

const RandomBeerCard = styled.div`
  width: 26rem;
`;

const BeerImg = styled.img`
  width: 4rem;
  height: 15rem;
  display: flex;
  align-self: center;
`;

const ItemsPlaced = styled.div`
  display: felx;
  justify-content: space-between;
  align-items: baseline;
`;

const Tittle = styled.h2`
  font-weight: 900;
  font-family: auto;
`;

const Subtittle = styled.h6`
  color: grey;
`;

const FontSize = styled.p`
  font-size: small;
  font-weight: 800;
`;

const Description = styled.p`
  padding: 1rem;
`;

const Footer = styled.small`
  color: grey;
  padding: 1rem;
  fontweight: 500;
`;

const RandomBeers = function() {
  const { data, loading } = useFetch(
    "https://ih-beers-api2.herokuapp.com/beers"
  );
  if (loading) {
    return <RandomCard>Cargando cerveza Random...</RandomCard>;
  }
  const index = Math.floor(Math.random() * data.length);
  const randomBeer = data[index];

  return (
    <>
      <Cards>
        <Navbar />
        <RandomBeerCard className="card-deck">
          <div className="card">
            <BeerImg
              src={randomBeer.image_url}
              className="card-img-top mt-5"
              alt="Random Beer picture"
            />
            <div>
              <ItemsPlaced className="card-body">
                <div style={{ maxWidth: "15rem" }}>
                  <Tittle>
                    {randomBeer.name}
                    <b />
                  </Tittle>
                  <Subtittle className="card-title">
                    {randomBeer.tagline}
                  </Subtittle>
                </div>
                <div>
                  <Subtittle
                    style={{ fontSize: "larger" }}
                    className="card-title"
                  >
                    {" "}
                    {randomBeer.attenuation_level}
                  </Subtittle>
                  <FontSize>
                    {randomBeer.first_brewed}
                    <b />
                  </FontSize>
                </div>
              </ItemsPlaced>
              <Description className="card-text">
                {randomBeer.description}
              </Description>
            </div>
            <div>
              <Footer>{randomBeer.contributed_by}</Footer>
            </div>
          </div>
        </RandomBeerCard>
      </Cards>
    </>
  );
};

export default RandomBeers;
