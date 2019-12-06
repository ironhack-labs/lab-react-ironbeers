import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeLayout = styled.div`
  div {
    height: 30vh;
    img {
      height: 70%;
      width: 100%;
    }
  }
`;
export default class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Link to={"/beers"}>
          <div>
            <img src="/images/beers.png" alt="birriecillas" />
            <h1>All Beers</h1>
            <p>lorem ipsum dolor</p>
          </div>
        </Link>
        <Link to={"/random-beer"}>
          <div>
            <img src="/images/random-beer.png" alt="birriecillas2" />
            <h1>Random Beer</h1>
            <p>lorem</p>
          </div>
        </Link>
        <Link to={"/new-beer"}>
          <div>
            <img src="/images/new-beer.png" alt="birriecillas3" />
            <h1>New Beer</h1>
            <p>lorem</p>
          </div>
        </Link>
      </HomeLayout>
    );
  }
}
