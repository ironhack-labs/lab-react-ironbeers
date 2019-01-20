import React from "react";
import { Header } from "../components/Header";
import { getBeers } from "../lib/getBeers";
import { CardBeer } from "../components/CardBeer";
import { Link } from "react-router-dom";

export class DrawBeers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log("Component did mount");
    getBeers().then(data => {
      this.setState({ data: data });
    });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <Header />
        <h1>Beers</h1>
        {data.map((e) => (
           <Link to={`/beers/${e._id}`}> <CardBeer key={e._id} props={e} /> </Link>
           ))}
      </div>
    );
  }
}

