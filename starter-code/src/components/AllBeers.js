import React, { Component } from 'react';
import Axios from 'axios';
import NavBar from './NavBar';


class AllBeers extends Component {
  constructor(props){
    super(props);
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      console.log(response.data[0])
      this.setState({
        beers: response.data
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div className="allBeersContainer">
      <NavBar/>
        {
          this.state.beers.map(beer => {
            return (
              <div className="beer">
                <figure>
                  <img src={beer.image_url} alt={beer.name}/>
                </figure>
                <div className="infos">
                  <div className="header">
                    <div className="title">
                      <h3>{beer.name}</h3>
                      <h5>{beer.tagline}</h5>
                    </div>
                    <div className="other-infos">
                      <h4>{beer.attenuation_level}</h4>
                      <h6>{beer.first_brewed}</h6>
                    </div>
                  </div>
                  <div className="descrip">
                    <p>{beer.description}</p>
                    <p><span className="author">{beer.contributed_by}</span></p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default AllBeers;