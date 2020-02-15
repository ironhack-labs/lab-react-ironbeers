import React from "react";
import axios from "axios";

class BeerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foundBeer: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      console.log("did update");
      let id = this.props.match.params.id;
      axios.get("https://ih-beers-api2.herokuapp.com/beers/" + id).then(response => {
        this.setState({ foundBeer: response.data });
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      console.log("did update");
      axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then(response => {
        console.log(response);
        this.setState({ foundBeer: response.data });
      });
    }
  }

  render() {
    const beer = this.state.foundBeer;
    return (
      <div className="BeerInfo">
        <div className="imageBox">
          <img src={beer.image_url} alt="beer" width="7%" />
        </div>
        <br />
        <div className="beer">
          <h3>{beer.name}</h3>
          <small>{beer.tagline}</small>
          <br />
          <br />
          <p>{beer.description}</p>
          <small>{beer.contributed_by}</small>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
