import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledBeerView = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 4em;
  img {
    display: block;
    margin: 0 auto;
    height: 18em;
  }
  .beerInfo01, .beerInfo02 {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 1em;
    h2, h3 {
      margin: 0;
    }
    .beerLevel, .beerTag {
      opacity: .5;
    }
    .beerBrewed {
      font-size: .8em;
    }
    .beerTag {
      font-weight: lighter;
    }
  }
  .creator {
    font-size: .8em;
    opacity: .5;
  }
  .backBtn {
    width: 100%;
    display: inline-block;
    margin-top: 1em;
    text-align: center;
    span {
      background: #3dc4fc;
      border-radius: 5em;
      padding: .5em 1em;
      font-size: 1em;
      font-weight: bold;
      color: white;
    }
  }
`;

const BeerView = (props) => {
  const {img, name, tagline, level, brewed, description, created, single} = props;
  return (
    <StyledBeerView>
      <img className="beerImg" src={img} alt={name}/>
      <div className="beerInfo01">
        <h2 className="beerName">{name}</h2>
        <h2 className="beerLevel">{level}</h2>
      </div>
      <div className="beerInfo02">
        <h3 className="beerTag">{tagline}</h3>
        <h3 className="beerBrewed">{brewed}</h3>
      </div>
      <p className="beerDesc">{description}</p>
      <p className="creator">{created.split(' ').slice(0,2).join(' ')}</p>
      {single && <Link className="backBtn" to="/beers"><span>go back</span></Link>}
    </StyledBeerView>
  );
}

export default BeerView;
