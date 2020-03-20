import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { beersList, searchBeer } from "../../lib/BeersApi";
import { Header } from "../components/Header";
import styled from "styled-components";

const ContainerImg = styled.img`
  width: 100px;
`;

export const Beers = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    beersList().then(list => setList(list));
  }, []);

  const [search, setSearch] = useState("");

  const handleSearchBeer = e => {
    searchBeer(e.target.value).then(list => setList(list));
    setSearch(e.target.value);
  };

  return (
    <>
      <Header />
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Search beers"
        onChange={handleSearchBeer}
      />
      <ul>
        {list.map(beer => (
          <li key={beer._id}>
            {/* pasas el id  para el buscador */}
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name} />
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <p>{beer.contributed_by}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
