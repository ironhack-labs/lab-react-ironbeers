import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Cards from "../components/UI/AllBeers";
import axios from "axios";
import styled from "styled-components";
import useFetch from "../components/hooks/useFetch";

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

const BeerDetail = props => {
  const { id } = props.match.params;
  const [beer, setbeer] = useState({});
  const ListBeers = async () => {
    const res = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${id}`
    );
    return res.data;
  };
  useEffect(() => {
    ListBeers().then(beer => setbeer(beer));
  }, []);

  /*const BeerDetail = props => {
  const { id } = props.match.params;
  const url = `https://ih-beers-api2.herokuapp.com/beers/${id}`;
  const { data, loading } = useFetch(url);
  if (loading) {
    return <Cards>Cargando las de cerveza...</Cards>;
  }
  */

  return (
    <>
      <Cards>
        <Navbar />
        <RandomBeerCard className="card-deck">
          <div className="card">
            <BeerImg
              src={beer.image_url}
              className="card-img-top mt-5"
              alt="Random Beer picture"
            />
            <div>
              <ItemsPlaced className="card-body">
                <div style={{ maxWidth: "15rem" }}>
                  <Tittle>
                    {beer.name}
                    <b />
                  </Tittle>
                  <Subtittle className="card-title">{beer.tagline}</Subtittle>
                </div>
                <div>
                  <Subtittle
                    style={{ fontSize: "larger" }}
                    className="card-title"
                  >
                    {" "}
                    {beer.attenuation_level}
                  </Subtittle>
                  <FontSize>
                    {beer.first_brewed}
                    <b />
                  </FontSize>
                </div>
              </ItemsPlaced>
              <Description className="card-text">
                {beer.description}
              </Description>
            </div>
            <div>
              <Footer>{beer.contributed_by}</Footer>
            </div>
          </div>
        </RandomBeerCard>
      </Cards>
    </>
  );
};

export default BeerDetail;
