import React from "react";
import axios from "axios";

class BeerDetail extends React.Component {
  state = {
    beer: []
  };

  componentDidMount() {
    console.log("did  mount");
    const props = this.props;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
      .then(response => {
        // console.log(response.data.name);

        // console.log("Hellllloooo", props);

        this.setState({
          beer: response.data
        });
        console.log(this.state.beer);
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(this.state.beer);
  }

  // componentDidMount() {
  //   this.getBeerData();
  // }

  render() {
    console.log("did render");
    const beer = this.state.beer;
    console.log(this.state.beer);
    return (
      <div style={{ listStyle: "none" }}>
        <li>
          <img
            style={{ height: "100px" }}
            src={beer.image_url}
            alt="berr pic"
          />
        </li>
        <li>{beer.name}</li>
        <li>{beer.tagline}</li>
        <li>{beer.first_brewed}</li>
        <li>{beer.attenuation_level}</li>
        <li>{beer.description}</li>
        <li>{beer.contributed_by}</li>
      </div>
    );
  }
}

export default BeerDetail;
