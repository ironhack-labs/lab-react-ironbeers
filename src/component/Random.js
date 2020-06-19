import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

export default class Random extends React.Component {
  state = {
    beer: ''
  }
  componentDidMount(){
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        this.setState({
          beer: res.data
        })
      })
  }
  render(){
    if(!this.state.beer){
      return (
<div className="text-center">
  <div className="spinner-border text-info" role="status">
    <span className="sr-only">Loading...</span>
  </div>
</div>

      )
    }
    const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state.beer
    // let id = this.props.match.params.id
    return (
    <div className="card" style={{width: '18rem'}}>
  <img src={image_url} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{tagline}</p>
    <p className="card-text">{first_brewed}</p>
    <p className="card-text">{attenuation_level}</p>
    <p className="card-text">{description}</p>
    <p className="card-text">{contributed_by}</p>
  </div>
</div>

  );
    }

}