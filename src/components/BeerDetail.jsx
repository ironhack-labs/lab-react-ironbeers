import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledBeer = styled.div`
  border-bottom: 1px solid #eee;
  .container {
    width: 90%;
    margin: 0 auto;
    padding: 1em 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    .imgContainer {
      width: 30%;
      text-align: center;
      img {
        height: 8em;
      }
    }
    .beerInfo {
      width: 65%;
      h2 {
        margin-bottom: .5em;
      }
      h3, p {
        margin: 0;
      }
      h3 {
        margin-bottom: .3em;
        font-weight: lighter;
        color: grey;
      }
      p {
        font-size: .8em;
      }
      a {
        width: 100%;
        display: inline-block;
        margin-top: 1em;
        text-align: right;
        span {
          background: #3dc4fc;
          border-radius: 5em;
          padding: .1em .5em .4em;
          font-size: .7em;
          color: white;
        }
      }
    }
  }
`;

const BeerDetail = (props) => {
  const {id, img, name, tagline, created} = props;
  return (
    <StyledBeer>
      <div className="container">
        <div className="imgContainer">
          <img className="beerImg" src={img} alt={name}/>
        </div>
        <div className="beerInfo">
          <h2 className="beerName">{name}</h2>
          <h3 className="beerTag">{tagline}</h3>
          <p className="beerDesc"><strong>Created by:</strong> {created.split(' ').slice(0,2).join(' ')}</p>
          <Link to={`/beers/${id}`}><span>see more</span></Link>
        </div>
      </div>
    </StyledBeer>
  );
}

export default BeerDetail;
