import React, { Component } from 'react';
import axios from 'axios';
import MyNav from './MyNav';
import Spinner from 'react-bootstrap/Spinner';

export default class SingleBeer extends Component{
  state={
    beer:''
  }

  componentDidMount(){
    let route = ''
    // if the component is called from the beers/:beerid route
    if(this.props.match.params.beerid){
      let id = this.props.match.params.beerid
      route=`https://ih-beers-api2.herokuapp.com/beers/${id}`
    }
    // if the component is called from the random-beer route
    else {
      route = 'https://ih-beers-api2.herokuapp.com/beers/random'
    }
    axios.get(route)
        .then((res) => {
          this.setState({
            beer: res.data
          })
        })
        .catch((err) => console.log(err))
    
  }


  render(){
    if(!this.state.beer){
      return (
        <div className="loadingSpinner">
          <Spinner animation="border" variant="info" />
        </div>
      )
    }

    const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state.beer

    return (
      <div className="beerDetails">
        <MyNav />
        <div className="imgBlock">
          <img src={image_url} alt={name} />
        </div>
        <div className="infoBlock">
          <div className="firstLine">
            <h2>{name}</h2>
            <p className="attLevel">{attenuation_level}</p>
          </div>
          <div className="firstLine">
            <p className="tagline">{tagline}</p>
            <p className="date">{first_brewed}</p>
          </div>
          <div>
          <p className="description">{description}</p>
          <p className="contributor">{contributed_by}</p>
          </div>
        </div>
      </div>
    )
  }

}
