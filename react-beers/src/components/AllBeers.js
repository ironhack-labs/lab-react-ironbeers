import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class AllBeers extends React.Component {
  constructor() {
    super();
    this.state = { listOfBeers: [] };
  }

  getAllBeers = () => {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(responseFromApi => {
        this.setState({
          listOfBeers: responseFromApi.data
        })
      })
  }

  componentDidMount() {
    this.getAllBeers()
  }

  render() {
    return(
      <React.Fragment>
        <Link to="/" className="btn btn-primary">
          Inicio
        </Link>
        
        <div className="list-group">
          {this.state.listOfBeers.map((beer, index) => (
            <div key={beer._id}>
            <Link to={`/beers/${beer._id}`} className="list-group-item list-group-item-action">
              <div className="col-3">
                  <img src={beer.image_url} alt={beer.name} width="30px" height="70px"/>
              </div>
              <div className="col-8">
                  <h2>{beer.name}</h2>
                  <p>{beer.tagline}</p>
                  <p><span>Contributed by:</span> {beer.contributed_by}</p>
              </div>
            </Link>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default AllBeers