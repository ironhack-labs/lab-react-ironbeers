import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const BeersLayout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const BeerCard = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
  div:last-of-child {
    display: flex;
    flex-direction: column;
  }
  p {
    color: grey;
  }
  img {
    width: 150px;
  }
`;

export default class NewBeer extends Component {
  state = {
    beers: []
  };
  async componentDidMount() {
    const { data } = await axios.get("https://api.punkapi.com/v2/beers");
    this.setState({
      beers: data
    });
  }

  render() {
    return (
      <BeersLayout>
        {this.state.beers.map(e => (
          <BeerCard>
            <div>
              <img src={e.image_url} alt="birrita" />
            </div>
            <div>
              <h1>{e.name}</h1>
              <h4>{e.tagline}</h4>
              <p>
                <strong>Created by: </strong>
                {e.name}
              </p>
            </div>
          </BeerCard>
        ))}
      </BeersLayout>
    );
  }
}
