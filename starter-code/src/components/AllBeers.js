import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import {Beers} from "../lib/BeersApi";
import styled from "styled-components";

const List = styled.ul`
  padding: 0 10px;
`;

const Item = styled.li`
  list-style:none;
  border-bottom: 1px solid lightgray;

  & > a {
    color: #333;
    display:flex;
  }
`;

const Image = styled.div`
  flex-shrink:1;
  display: inline-block;
  text-align: center;
  width:60px;

  img{
    height: 80px;
  }
`;

const Info = styled.div`
  flex-shrink:2;

    h2{
      margin:0;
    }

    p {
      margin:0;
    }

    small {
      margin:0;
    }
`;


const AllBeers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    Beers().then(beers => setBeers(beers));
  }, []);
  
  return (
    <>
  <Navbar></Navbar>
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
    )
};

export default AllBeers;