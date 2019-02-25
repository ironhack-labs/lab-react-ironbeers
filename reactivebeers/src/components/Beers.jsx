import React from "react";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";

class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listOfBeers: [] };
  }

  getAllBeers = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(responseFromApi => {
        this.setState({
          listOfBeers: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    console.log(this.state);
    const beers = this.state.listOfBeers;

    return (
      <div>
        <Header />
        {beers.map((beer, index) => {
          return (
            <Link to={`/beers/${beer._id}`}>
            <div key={index}>
              <div>
                <img src={beer.image_url} />
              </div>
              <div>
                <h3>{beer.name}</h3>
                <h5>{beer.tagline}</h5>
                <p>{beer.contributed_by}</p>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Beers;
