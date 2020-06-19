import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

export default class Single extends React.Component {
  state = {
    beer: ''
  }
  componentDidMount(){
    let id = this.props
    console.log(id)
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((res) => {
        this.setState({
          beer: res.data
        })
      })
  }
  render(){
    if(!this.state.todo){
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
    <div class="card" style={{width: '18rem'}}>
  <img src={image_url} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{tagline}</p>
    <p class="card-text">{first_brewed}</p>
    <p class="card-text">{attenuation_level}</p>
    <p class="card-text">{description}</p>
    <p class="card-text">{contributed_by}</p>
  </div>
</div>

  );
    }

}