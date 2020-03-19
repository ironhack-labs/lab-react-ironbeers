import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allBeers } from "../lib/beers.api";
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

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    allBeers().then(beers => setBeers(beers));
  }, []);

  if (!beers[0]) return <p>Loading...</p>;

  return (
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
  );
};

export default Beers;
