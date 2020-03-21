import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import ContainerPage from "../components/UI/ContainerPage";
import styled from "styled-components";
import useFetch from "../components/hooks/useFetch";

const RandomBeerCard = styled.div`
  width: 26rem;
`;

const BeerImg = styled.img`
  width: 4rem;
  height: 13rem;
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
  const url = `https://ih-beers-api2.herokuapp.com/beers/${id}`;
  const { data, loading } = useFetch(url);
  if (loading) {
    return <ContainerPage>Cargando las de cerveza...</ContainerPage>;
  }

  return (
    <>
      <ContainerPage>
        <Navbar />
        <RandomBeerCard className="card-deck">
          <div className="card">
            <BeerImg
              src={data.image_url}
              className="card-img-top mt-5"
              alt="Random Beer picture"
            />
            <div>
              <ItemsPlaced className="card-body">
                <div style={{ maxWidth: "15rem" }}>
                  <Tittle>
                    {data.name}
                    <b />
                  </Tittle>
                  <Subtittle className="card-title">{data.tagline}</Subtittle>
                </div>
                <div>
                  <Subtittle
                    style={{ fontSize: "larger" }}
                    className="card-title"
                  >
                    {" "}
                    {data.attenuation_level}
                  </Subtittle>
                  <FontSize>
                    {data.first_brewed}
                    <b />
                  </FontSize>
                </div>
              </ItemsPlaced>
              <Description className="card-text">
                {data.description}
              </Description>
            </div>
            <div>
              <Footer>{data.contributed_by}</Footer>
            </div>
          </div>
        </RandomBeerCard>
      </ContainerPage>
    </>
  );
};

export default BeerDetail;
