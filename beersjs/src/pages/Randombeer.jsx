import React from "react";
import { Header } from "../components/Header";
import { GetRandomBeer } from "../lib/getBeers";

export default class Randombeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    GetRandomBeer().then(data => {
      this.setState({ data: data });
    });
  }

  // this.setState({data})

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <Header />
        <div className="singleCard">
          {data.map(e => (
            <div className={"randomCard"} key={e._id}>
              <img
                className="cardPhoto"
                src={e.image_url}
                alt="foto de cerve"
              />
              <div className="nombreTag">
                <h1>{e.name}</h1>
                <p>{e.first_brewed}</p>
              </div>
              <div className="firstAte">
                <h3>{e.tagline}</h3>
                <p>{e.attenuation_level}</p>
              </div>
              <p>{e.description}</p>
              <p>{e.contributed_by}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
