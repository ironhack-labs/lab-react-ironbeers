import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledItem = styled.div`
  height: 33%;
  width: 100%;
  img {
    width: 100%;
    height: 65%;
    object-fit: cover;
  }
  .infoLink {
    padding: 0 1em 1em;
    a {
      text-decoration: none;
      color: black;
      height: 1.5em;
      font-size: 1.3em;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      i {
        font-size: .6em;
        margin: .4em 0 0 .5em;
      }
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
        <Link className="linkMeu" to={`/${props.to}`}><span>{props.linkName}</span> <i className="fas fa-arrow-right"></i></Link>
        <div className="description">{props.children}</div>
      </div>
    </StyledItem>
  );
}

export default ItemMenu;
