import React from "react";
import { Header } from "../components/Header";
import { GetOneBeer } from "../lib/getBeers";
import { CardBeer } from "../components/CardBeer";

export class GetOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    GetOneBeer(this.props.match.params).then(({ data }) => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header />
        <div className="singleCard">
          <CardBeer  props={data} />
        </div>
      </div>
    );
  }
}
