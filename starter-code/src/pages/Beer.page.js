import React, { useState, useEffect } from "react";
import { Layout } from "../layouts/Layout";
import axios from "axios";
import { BeerCard } from "../components/BeerCard";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: 100px auto 0;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const api = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com"
});

export const BeerPage = () => {
  const [beers, setBeers] = useState();

  useEffect(() => {
    api.get("/beers").then(res => {
      const data = res.data;
      setBeers(data);
    });
  }, []);
  console.log(beers);
  return (
    <Layout>
      <Container>
        {beers &&
          beers.map((e, i) => {
            return <BeerCard key={i} {...e}></BeerCard>;
          })}
      </Container>
    </Layout>
  );
};

/*{
  beers.map((e, i) => {
    return <BeerCard {...e}></BeerCard>;
  });
}*/
