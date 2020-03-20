import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import axios from "axios";
import { BeerCard } from "../components/BeerCard";
import styled from "styled-components";
import { LoadingContext } from "../../lib/loading.api";
import { Input } from "../components/Form.js";
import { searchBeer } from "../../lib/loading.api.js";

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
  const [search, setSearch] = useState("");
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    //console.log("beer page effect");
    setLoading(true);
    api.get("/beers").then(res => {
      const data = res.data;
      setLoading(false);
      setBeers(data);
    });
  }, [setLoading]);

  const handleSearch = async q => {
    setSearch(q);
    const res = await searchBeer(q);
    setBeers(res);
  };

  return (
    <Layout>
      <Container>
        <Input
          type="text"
          value={search}
          placeholder="search a beer"
          onChange={e => handleSearch(e.target.value)}
        />
        {beers &&
          beers.map((e, i) => {
            return (
              <Link
                to={`/beer/${e._id}`}
                key={i}
                style={{ textDecoration: "none" }}
              >
                <BeerCard key={i} {...e}></BeerCard>
              </Link>
            );
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
