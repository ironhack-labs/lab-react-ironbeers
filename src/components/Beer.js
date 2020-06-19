import React from 'react';
import axios from 'axios';

export default class Beer extends React.Component {
  state = {
    beer: ''
  }

  componentDidMount() {
    let id = this.props.match.params.beerId
    
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((res) => {
        this.setState({
          beer: res.data
        })
      })

  }

  render() {
    if (!this.state.beer) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state.beer
    return (
      <div>
        <img src={image_url} alt="..." />
        <h1>{name}</h1>
        <h2>{tagline}</h2>
        <p>{first_brewed}</p>
        <p>{attenuation_level}</p>
        <p>{description}</p>
        <p>{contributed_by}</p>
      </div>
    );
  }
  
}
