import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Beers, searchBeers } from "../lib/BeersApi";
import styled from "styled-components";

const List = styled.ul`
  padding: 0 10px;
`;

const Item = styled.li`
  list-style: none;
  border-bottom: 1px solid lightgray;

  & > a {
    color: #333;
    display: flex;
  }
`;

const Image = styled.div`
  flex-shrink: 1;
  display: inline-block;
  text-align: center;
  width: 60px;

  img {
    height: 80px;
  }
`;

const Info = styled.div`
  flex-shrink: 2;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  small {
    margin: 0;
  }
`;

const Input = styled.input`
  width: -webkit-fill-available;
  border-radius: 10px;
  padding: 10px;
  margin: 50px;
  font-size: 1rem;
  border: 1px solid lightgray;
`;

const AllBeers = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Beers().then(beers => setBeers(beers));
  }, []);

  const handleSearch = e => {
    const query = e.target.value;
    searchBeers(query).then(beers => setBeers(beers));
    setSearch(query);
  };

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <Input
          name="search"
          placeholder="Search a beer"
          value={search}
          onChange={handleSearch}
        />
      </form>
      <List>
        {beers.map(beer => (
          <Item key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <Image>
                <img src={beer.image_url} alt={beer.name} />
              </Image>
              <Info>
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <small>{beer.contributed_by}</small>
              </Info>
            </Link>
          </Item>
        ))}
      </List>
    </>
  );
};

export default AllBeers;
