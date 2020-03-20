import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { BeerCard } from "../components/BeerCard";
import styled from "styled-components";
import { LoadingContext } from "../../lib/loading.api";
import { searchBeer, retrieveList } from "../../lib/loading.api.js";
import { Suggestions } from "../components/Suggestion";

const Container = styled.div`
  width: 60%;
  margin: 100px auto 0;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Input = styled.input`
  width: 100%;
  color: #2f2f2f;
  padding: 10px 0;
  margin: 5px 0 20px 0;
  border: none;
  border-bottom: 1px solid #d7c9aa;
  text-align: center;
  font-family: "Quicksand";
  font-size: 1rem;
  :focus {
    outline: none;
  }
`;

const ListContainer = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
`;

const List = styled.ul`
  padding: 0;
  width: 100%;
  position: absolute;
  top: 29px;
  left: 0;
  background-color: rgba(215, 201, 170, 0.7);
  z-index: 10;
  list-style: none;
  text-align: center;
`;

export const BeerPage = () => {
  const [beers, setBeers] = useState();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    //console.log("beer page effect");
    setLoading(true);
    retrieveList().then(data => {
      setLoading(false);
      setBeers(data);
    });
  }, [setLoading]);

  const handleSearch = async (q, opt = false) => {
    setSearch(q);
    const res = await searchBeer(q);
    if (q) {
      setSuggestions(res);
    } else {
      setSuggestions([]);
    }
    // this is for updating the beer list directly when called with an opt parameter
    if (opt === true) {
      setBeers(res);
      setSearch("");
      setSuggestions([]);
    }
  };

  const handleEnter = async e => {
    if (e.key === "Enter") {
      await handleSearch(e.target.value, true);
    }
  };

  return (
    <Layout>
      <Container>
        <ListContainer>
          <Input
            type="text"
            value={search}
            placeholder="Type a beer name..."
            onChange={e => handleSearch(e.target.value)}
            onKeyDown={e => handleEnter(e)}
          />

          <List>
            {suggestions &&
              suggestions.map((e, i) => {
                return <Suggestions key={i} {...e} />;
              })}
          </List>
        </ListContainer>

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
