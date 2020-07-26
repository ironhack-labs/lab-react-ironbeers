import React from "react";
import axios from "axios";
import Header from '../componets/Header'
import apiHandler from "../api/apiHandler";

class BeerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    const beerId = this.props.match.params.beerId;
    console.log(beerId);
    apiHandler
      .getOneBeer(beerId)
      .then((res) => {
        this.setState({ beer: res.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
  
    const beerId = this.props.match.params.beerId;

    if (
      this.props.match.params.beerId !== prevProps.match.params.beerId
    ) {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers" + beerId)
        .then((res) => {
          this.setState({
            beer: res.data,
          });
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    if (this.state.beer === null) return <div>Loading...</div>;

      return (
        
          <div>
              <Header/>
        <img  style={{ width: "100px" }} src={this.state.beer.image_url} alt="one beer" />
        <h4>{this.state.beer.name}</h4>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    );
  }
}

export default BeerDetail;
