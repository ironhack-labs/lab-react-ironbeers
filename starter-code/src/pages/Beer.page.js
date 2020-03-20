import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { BeerCard } from "../components/BeerCard";
import styled from "styled-components";
import { LoadingContext } from "../../lib/loading.api";
import { Input } from "../components/Form.js";
import { searchBeer, retrieveList } from "../../lib/loading.api.js";

const Container = styled.div`
  width: 60%;
  margin: 100px auto 0;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const BeerPage = () => {
  const [beers, setBeers] = useState();
  const [search, setSearch] = useState("");
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    //console.log("beer page effect");
    setLoading(true);
    retrieveList().then(data => {
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
