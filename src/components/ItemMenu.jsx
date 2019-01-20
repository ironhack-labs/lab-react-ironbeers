import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledItem = styled.div`
  height: 33%;
  width: 100%;
  img {
    width: 100%;
    height: 65%;
  }
  .infoLink {
    padding: 0 1em 1em;
    a {
      text-decoration: none;
      color: black;
      font-size: 1.3em;
    }
    .description {
      font-size: .7em;
      font-weight: lighter;
      color: grey;
    }
  }
`;

const ItemMenu = (props) => {
  return (
    <StyledItem>
      <img src={`/img/${props.to}.png`} alt={props.to}/>
      <div className="infoLink">
        <Link className="linkMeu" to={`/${props.to}`}>{props.linkName}</Link>
        <div className="description">{props.children}</div>
      </div>
    </StyledItem>
  );
}

export default ItemMenu;
