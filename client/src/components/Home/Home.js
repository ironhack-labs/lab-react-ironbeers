import React, { Component } from "react";

import { Link } from "react-router-dom";

import { RouteWrapper, StyledImg, StyledH1, StyledP } from "./Home.styled";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <RouteWrapper>
          <Link to="/beers">
            <StyledImg
              src={require("../../images/all-beers.jpeg")}
              alt="beer"
            />
          </Link>
          <StyledH1>All Beers</StyledH1>
          <StyledP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            debitis sequi aliquam perspiciatis.
          </StyledP>
        </RouteWrapper>
        <RouteWrapper>
          <Link to="/beers/random">
            <StyledImg
              src={require("../../images/random-beer.jpg")}
              alt="beer"
            />
          </Link>
          <StyledH1>Random Beer</StyledH1>
          <StyledP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            debitis sequi aliquam perspiciatis.
          </StyledP>
        </RouteWrapper>
        <RouteWrapper>
          <Link to="/beers/new">
            <StyledImg src={require("../../images/beer.jpg")} alt="beer" />
          </Link>
          <StyledH1>New Beer</StyledH1>
          <StyledP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            debitis sequi aliquam perspiciatis.
          </StyledP>
        </RouteWrapper>
      </React.Fragment>
    );
  }
}
