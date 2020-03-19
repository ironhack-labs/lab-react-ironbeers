import React, { useState, useEffect, useContext } from "react";
import { Layout } from "../layouts/Layout";
import axios from "axios";
import { Beer } from "../components/Beer.js";
import styled from "styled-components";
import { LoadingContext } from "../../lib/loading.api";

const Container = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 40px;
  margin: 50px auto 0;
  @media (max-width: 768px) {
  }
`;

const api = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com"
});

export const SingleBeer = props => {
  const [beer, setBeer] = useState();
  const { setLoading } = useContext(LoadingContext);
  const { id } = props.match.params;

  useEffect(() => {
    console.log("single beer page effect");
    setLoading(true);
    api.get(`/beers/${id}`).then(res => {
      const data = res.data;
      console.log(data);
      setLoading(false);
      setBeer(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Container>{beer && <Beer {...beer}></Beer>}</Container>
    </Layout>
  );
};
