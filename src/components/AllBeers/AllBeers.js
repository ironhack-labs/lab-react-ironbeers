import React from 'react';
import { Component } from 'react';
import '../AllBeers/AllBeers.css';
import Header from '../Header/Header';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class AllBeers extends Component {

  state = {
    data: null,
    loading: true
  }

  componentDidMount() {
    Axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(res => {
        this.setState({
          data: res.data,
          loading: false
        })
      })
  }

  render() {
    return (

      <div className="AllBeers">
        <Header />
        <h1 className="title">All Beers</h1>

        {this.state.loading ? (<div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>) :
          <div className="listBeers container">
            {this.state.data.map((beer) => (
              <Link to={`/allbeers/${beer._id}`} className="card-list">
                <div className="row mx-5 my-5" key={beer._id}>
                  <div className="">
                    <img src={beer.image_url} alt="beer" height="250" />
                  </div>
                  <div className="mx-5 d-flex flex-column align-items-start justify-content-center">
                    <h2 className="beer-name">{beer.name}</h2>
                    <h4 className="beer-tagline">{beer.tagline}</h4>
                    <p className="beer-created"><strong>Created by:</strong>{beer.contributed_by}</p>
                
                  </div >
                     
                </div>
              </Link>
            ))}

          </div>
        }

      </div>

    )
  }
}

export default AllBeers