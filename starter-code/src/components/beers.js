import React, { Component } from 'react'
import Service from '../service/beers.service'
import { Link } from 'react-router-dom'


class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = { beers: [] };
    this._service = new Service();
  }

  componentDidMount = () => {
    // const coasterId = this.props.match.params.id
    this._service
      .getAllBeers()
      .then(theBeers => this.setState({ beers: theBeers.data }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        {this.state.beers.map((elm, idx) => (
          <div key={idx}>
            <img src={elm.image_url} alt= "foto" />
            <h2>{elm.name}</h2>
            <h6>{elm.tagline}</h6>

            <p>Created: {elm.contributed_by}</p>
            <Link to={`/beersDetails/${elm._id}`}>Details</Link>
          </div>
        ))}
      </div>
    );
  }
}
export default Beers;