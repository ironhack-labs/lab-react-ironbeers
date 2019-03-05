import React, { Component } from 'react';
import Navbar from './misc/NavBar';
import { listBeers } from '../services/BeersServices';
import { Link } from 'react-router-dom';

class Beers extends Component {
    state = {
        beers: [],
        error: false
    }
    
    componentDidMount = () => {
      listBeers()
      .then(response => this.setState({ beers: response.data }))
      .catch(err => this.setState({ error: true }))
    }
    
    render = () => {
      
      const beerList = this.state.beers.map((beer, index) => 
        <tr key={index}>
          <td><img src={beer.image_url} alt={beer.name} className="picture"/></td>
          <td>
            <h3><Link to={`/beers/${beer._id}`}>{beer.name}</Link></h3>
            <h5>{beer.tagline}</h5>
            <h6><strong>Created by: </strong>{beer.name}</h6>
          </td>       
        </tr> )

        if (this.state.error) {
            return (<h1>Sorry!!!</h1>);
        } else {
            return (
        
              <div className="container">
              <Navbar/>
              <div className="box">
                <div className="media-content">
                   <div className="content">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {beerList}
                        </tbody>
                      </table>
                    </div>
                </div>
              </div>
          </div>
            );
        }
    }
}

export default Beers;