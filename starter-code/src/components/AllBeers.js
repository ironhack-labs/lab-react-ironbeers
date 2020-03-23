import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Beers } from "../api/BeersApi";

const List = styled.ul`
  padding: 0 20px;
`;

const Item = styled.li`
  list-style: none;
  border-bottom: 2px solid lightgray;
  padding-top: 20px;
  padding-bottom: 20px;
  & > a {
    color: #333;
    display: flex;
  }
`;

const Image = styled.div`
  flex-shrink: 1;
  display: inline-block;
  text-align: center;
  width: 80px;
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
    padding-top: 10px;
    margin: 0;
  }
  small {
    padding-top: 10px;
    margin: 0;
  }
`;

const AllBeers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    Beers().then(beers => setBeers(beers));
  }, []);
  //console.log(beers);

  return (
    <>
      <Navbar></Navbar>
      <List>
        {beers.map(beer => (
          <Item key={beer._id}>
            <Link to={`/beers/${beer._id}`} style={{ textDecoration: "none" }}>
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
