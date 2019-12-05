import React, {Component} from "react"
import Service from "../service/Beers.service"
import { Link } from "react-router-dom"


class Beers extends Component {
  constructor() {
    super();
    this._service = new Service();
    this.state = {
      beers: []
    };
  }

  componentDidMount = () => this.updateBeersList();

  updateBeersList = () => {
    this._service
      .getAllBeers()
      .then(allBeersFromDB => this.setState({ beers: allBeersFromDB.data }))
      .catch(err => console.log("Error", err));
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home</Link>
        </div>
        <h1>Beers</h1>
        {this.state.beers.map((elm, idx) => (
          <div key={idx}>
            <img src={elm.image_url} alt={elm.name} />
            <h3>{elm.name}</h3>
            <h5>{elm.tagline}</h5>
            <p>
              Created by: <small>{elm.contributed_by}</small>
            </p>
            <Link to={`/Beers/${elm._id}`}>View More</Link>
          </div>
        ))}
      </div>
    );
  }
}
export default Beers;
