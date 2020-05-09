import React, { Component } from "react";
import HomeButton from "../components/HomeButton";
import BeerPart from "../components/BeerPart";
import axios from "axios";

//I'm not sure if the way I get my beer is the best way to go here because I think I saw other students do it with a simpler way

export default class OneBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((apiResponse) => {
        let res = apiResponse.data.filter((i) => {
          if (i._id === id) {
            return i;
          } else {
            return null;
          }
        });
        this.setState({ beer: res[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.beer) return null;

    return (
      <div>
        <HomeButton />
        <div>
          <BeerPart clbk={this.state.beer} />
        </div>
      </div>
    );
  }
}
